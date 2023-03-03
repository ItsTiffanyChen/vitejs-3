const path = require("path");
// const cssInjectedByJsPlugin = require("vite-plugin-css-injected-by-js").default;
const { splitVendorChunkPlugin } = require("vite");
const legacy = require("@vitejs/plugin-legacy");
const deepMerge = require("deepmerge");
const rewriteManifestPlugin = require("../../plugins/rewriteManifest");
const { chunkSplitPlugin } = require("vite-plugin-chunk-split");
const viteImageMin = require("vite-plugin-imagemin");
// const del = require("rollup-plugin-delete");
//
const args = require("minimist")(process.argv.slice(2));
const local = args.local || false;
const isUnitTest = !!~args._.indexOf("tests/unit");

class Config {
  constructor({
    env = process.env,
    config: rawViteConfig = {},
    command = "",
    workspace = {},
    mode = ""
  }) {
    this.env = env;
    this.rawViteConfig = rawViteConfig;
    this.command = command;
    this.workspace = workspace;
    this.mode = mode;
    workspace.singleFile && (this.pageIndex = process.env.pageIndex || 0);
  }

  get sharedConfig() {
    return {
      build: {
        sourcemap: this.mode === this.config.env.lab,
        outDir: this.workspace.outputPath,
        copyPublicDir: false, // build public assets 的時候才設 true，下方 viteImageMin 也要開
        modulePreload: false,
        rollupOptions: {
          output: {
            entryFileNames: path.join(
              this.workspace.jsPath,
              "[name].[hash].js"
            ),
            assetFileNames: () => {
              return path.join(
                this.workspace.assetsPath,
                "css/[name].[hash][extname]"
              );
            },
            chunkFileNames: ({ name }) => {
              console.log("chunkFileNames", name);
              const filename = name === "vendor" ? "vendor" : "[name]";
              return `assets/js/${filename}.[hash].js`;
            }
          },
          // input: this.workspace.pages[0].template
          input: {
            ...this.workspace.pages.reduce((acc, cur) => {
              acc[cur.name] = cur.template;
              return acc;
            }, {}),
            main: path.resolve(__dirname, `../../index.html`)
          }
        }
      },
      plugins: [
        // 壓縮圖片，需要用的時候再打開
        // viteImageMin({
        //   filter:
        //     /^(?!dist\/(images|svgs)\/.+\/.*\.(png|jpg|jpeg|svg|gif|webp)$).*$/,
        //   gifsicle: {
        //     interlaced: true,
        //     optimizationLevel: 3
        //   },
        //   mozjpeg: {
        //     quality: 85,
        //     progressive: true
        //   },
        //   svgo: false,
        //   optipng: false,
        //   pngquant: false,
        //   webp: false
        // })
      ]
    };
  }

  get serve() {
    return this.sharedConfig;
  }

  get build() {
    return deepMerge(
      this.sharedConfig,
      this.workspace.singleFile ? this.buildSingle : this.buildMulti
    );
  }

  get buildSingle() {
    const publicPath = this.workspace.publicPath(this.config);
    const page = this.workspace.pages?.[this.pageIndex];
    return {
      // base: publicPath,
      build: {
        cssCodeSplit: false,
        lib: {
          formats: ["umd"],
          name: "aaa",
          fileName: "aaa",
          entry: page?.entry
        },
        rollupOptions: {
          input: "",
          output: {
            entryFileNames: path.join(
              this.workspace.jsPath,
              `${page?.chunkName}.js`
            )
          }
        }
      }
      // plugins: [cssInjectedByJsPlugin()]
    };
  }

  get buildMulti() {
    const publicPath = this.workspace.publicPath(this.config);
    return {
      base: publicPath,
      build: {
        manifest: this.workspace.manifest ? "new-manifest.json" : false
        // rollupOptions: {
        //   plugins: [
        //     del({
        //       targets: "dist/**/*.html",
        //       hook: "buildEnd"
        //     })
        //   ]
        // }
      },
      plugins: [
        // chunkVendors 待處理，目前會全部塞一隻
        // splitVendorChunkPlugin(),
        chunkSplitPlugin({
          // strategy: "single-vendor",
          customSplitting: {
            // lodash: ["lodash"],
            vue: [/vue/, /^@vue/]
            // bootstrap: ["bootstrap"]
          }
        })
        // ...(this.workspace.manifest
        //   ? [
        //       rewriteManifestPlugin({
        //         ...this.workspace,
        //         env: this.env
        //       })
        //     ]
        //   : [])
      ]
    };
  }

  get viteConfig() {
    return deepMerge(
      this.rawViteConfig,
      this.command === "serve" ? this.serve : this.build
    );
  }

  get config() {
    return {
      path: {
        //   frontendTemplate: "templates/",
        //   entry: "src/pages/",
        publicPath: local ? "/" : this.env.VUE_APP_CDN_URL
      },
      env: {
        current: this.env.VUE_APP_ENV,
        dev: "development",
        lab: "lab",
        staging: "staging",
        prod: "production"
      },
      isUnitTest,
      local: local,
      port: this.env.VUE_APP_PORT,
      workspace: {
        current: process.env.workspace || "dev",
        default: "dev",
        dev: "dev",
        cmy104: "cmy104",
        cindex: "cindex",
        common: "common",
        msc: "msc",
        time4jobs: "time4jobs",
        free: "free",
        jb: "jb",
        profile: "profile",
        test: "test"
      },
      preview: {
        status: !!args.preview, // 待處理，vite 不給帶多的參數
        project: process.env.TRAVIS_BRANCH
          ? process.env.TRAVIS_BRANCH.split("/")[1]
          : ""
      },
      spaPages: ["time4jobs", "profile"]
    };
  }
}

module.exports = Config;
