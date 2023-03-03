const path = require("path");
const { defineConfig, loadEnv } = require("vite");
const vue = require("@vitejs/plugin-vue");
const legacy = require("@vitejs/plugin-legacy");
// const handlebars = require("vite-plugin-handlebars");
// const customConfig = require("./config/vue/customConfig.js");
const Config = require("./config/vue/config.js");
const envScss = require("./config/vue/env.scss.js");
// const workspace = require("./config/vue/workspace/test.js");
const { ViteEjsPlugin } = require("vite-plugin-ejs");
const getWorkspace = require("./config/vue/workspace.js");
const args = require("minimist")(process.argv.slice(2));
const local = args.local || false;
// import eslint from "vite-plugin-eslint";
const { chunkSplitPlugin } = require("vite-plugin-chunk-split");

// https://vitejs.dev/config/
module.exports = defineConfig(({ command, mode }) => {
  // console.log("command: ", command);
  const env = loadEnv(mode, process.cwd(), "VUE_APP_");
  const workspace = getWorkspace(env);
  const proxy = require("./config/vue/proxy.js");
  const config = {
    appType: "mpa",
    build: {
      // sourcemap: this.mode === this.config.env.lab,
      outDir: workspace.outputPath,
      copyPublicDir: false, // build public assets 的時候才設 true，下方 viteImageMin 也要開
      modulePreload: false,
      rollupOptions: {
        output: {
          entryFileNames: path.join(workspace.jsPath, "[name].[hash].js"),
          assetFileNames: () => {
            return path.join(
              workspace.assetsPath,
              "css/[name].[hash][extname]"
            );
          },
          chunkFileNames: ({ name }) => {
            console.log("chunkFileNames", name);
            const filename = name === "vendor" ? "vendor" : "[name]";
            return `assets/js/${filename}.[hash].js`;
          }
        },
        // input: workspace.pages[0].template
        input: {
          ...workspace.pages.reduce((acc, cur) => {
            acc[cur.name] = cur.template;
            return acc;
          }, {}),
          main: path.resolve(__dirname, `./index.html`)
        }
      }
    },
    plugins: [
      // library 以外的都要 true
      // legacy({ renderLegacyChunks: false }),
      vue({
        template: {
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      }),
      ViteEjsPlugin({
        ...env,
        title: workspace.pages.reduce((acc, cur) => {
          acc[cur.chunkName] = cur.title;
          return acc;
        }, {}),
        appName: workspace.pages.reduce((acc, cur) => {
          acc[cur.chunkName] = cur.appName;
          return acc;
        }, {}),
        ejs: {
          views: [path.resolve(__dirname, "./templates")]
        }
      }),
      chunkSplitPlugin({
        // strategy: "single-vendor",
        customSplitting: {
          // lodash: ["lodash"],
          vue: [/vue/, /^@vue/]
          // bootstrap: ["bootstrap"]
        }
      })
    ],
    resolve: {
      alias: {
        static: path.resolve(__dirname, "./public/static"),
        node_modules: path.resolve(__dirname, "./node_modules"),
        "~node_modules": path.resolve(__dirname, "./node_modules"),
        "@": path.resolve(__dirname, "./src"),
        scss: path.resolve(__dirname, "./src/scss"),
        "~scss": path.resolve(__dirname, "./src/scss"),
        pages: path.resolve(__dirname, "./src/pages"),
        components: path.resolve(__dirname, "./src/components"),
        propstypes: path.resolve(__dirname, "./src/propstypes"),
        utility: path.resolve(__dirname, "./src/utility"),
        i18n: path.resolve(__dirname, "./src/i18n"),
        stories: path.resolve(__dirname, "./src/stories"),
        stores: path.resolve(__dirname, "./src/stores"),
        templates: path.resolve(__dirname, "./templates"),
        vue: "@vue/compat"
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: [envScss(env), `@import "scss/base.scss";`].join("\n")
    //     }
    //   }
    // },
    envPrefix: "VUE_APP_"
    // server: {
    //   port: env.VUE_APP_PORT,
    //   proxy: proxy(env),
    //   hmr: {
    //     overlay: false
    //   }
    // },
    // optimizeDeps: {
    // include: ["dom7", "swiper", "vue-swipe-actions"]
    // }
  };

  // if (process.env.NODE_ENV !== "production") {
  //   config.plugins.push(eslint());
  // }

  // const fullConfig = new Config({
  //   config,
  //   env,
  //   command,
  //   mode,
  //   workspace
  // });
  // const printSettings = require("./config/vue/visual/settings");
  // const printPath = require("./config/vue/visual/path");
  // printSettings({ workspace, config: fullConfig.config });
  // printPath({ workspace, config: fullConfig.config });

  // console.log("fullConfig", fullConfig.viteConfig);
  // return fullConfig.viteConfig;
  return config;
});
