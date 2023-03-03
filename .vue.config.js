const path = require("path");
const config = require("./config/vue/oldConfig");
const workspace = require("./config/vue/workspace");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const WebpackPageAssetsPlugin = require("webpack-page-assets-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const proxy = require("./config/vue/proxy");
require("./config/vue/visual/settings");
require("./config/vue/visual/path");
const envScss = require("./config/vue/env.scss");

module.exports = {
  publicPath: workspace.publicPath,
  assetsDir: workspace.assets, // done
  outputDir: workspace.output, // done
  pages: workspace.pages, // N/A
  lintOnSave: process.env.NODE_ENV === "production" ? false : "default",
  css: {
    // test ie css inline 有沒有上限的問題
    extract: workspace.extractCss,
    // sourceMap: config.env.current === config.env.dev || config.env.current === config.env.lab,
    loaderOptions: {
      sass: {
        prependData: envScss
      }
    }
  },
  productionSourceMap: config.env.current === config.env.lab,
  configureWebpack: (webpackConfig) => {
    if (workspace.manifest.length) {
      webpackConfig.plugins = webpackConfig.plugins.concat(
        new WebpackAssetsManifest({
          output: workspace.manifest
        })
      );
      webpackConfig.plugins = webpackConfig.plugins.concat(
        new WebpackPageAssetsPlugin({
          fileName: workspace.assetsList
        })
      );
    }

    // dev 不執行
    if (config.env.current !== config.env.dev) {
      // if (config.workspace.current != config.workspace.common) {
      Object.assign(webpackConfig.optimization, workspace.optimization);
      if (workspace.purgeCssConfig) {
        // 有設定 purgeCssConfig 才會加入 PurgecssPlugin
        webpackConfig.plugins = webpackConfig.plugins.concat(
          new PurgecssPlugin(workspace.purgeCssConfig)
        );
      }
      // }
    }
  },
  // webpack chain
  chainWebpack: (webpackConfig) => {
    // webpackConfig.resolve.extensions
    // .add('.scss');
    // <----------alias DONE!---------->
    webpackConfig.resolve.alias
      .set("static", path.resolve(__dirname, "./public/static"))
      .set("node_modules", path.resolve(__dirname, "./node_modules"))
      .set("pages", "@/pages")
      .set("scss", "@/scss")
      .set("components", "@/components")
      .set("propstypes", "@/propstypes")
      .set("directives", "@/directives")
      .set("utility", "@/utility")
      .set("i18n", "@/i18n")
      .set("stories", "@/stories")
      .set("stores", "@/stores")
      .set("templates", path.resolve(__dirname, "./templates"))
      .set("modernizr$", path.resolve(__dirname, ".modernizrrc"));
    // <----------alias DONE!---------->
    // TODO: 徵有緣人有空時把它修好～^^
    // webpackConfig.module
    //   .rule('template-loader')
    //   .test(/\.html$/)
    //   .use('html')
    //   .loader('html-loader')
    //   .end();

    // modernizr
    webpackConfig.module
      .rule("modernizr")
      .test(/\.modernizrrc$/)
      .use("webpack-modernizr-loader")
      .loader("webpack-modernizr-loader");

    // Test coverage
    // https://github.com/sysgears/mochapack/blob/master/docs/guides/code-coverage.md
    if (process.env.NODE_ENV === "coverage") {
      webpackConfig.module
        .rule("js")
        .use("istanbul-instrumenter-loader")
        .loader("istanbul-instrumenter-loader")
        .options({
          esModules: true
        })
        .after("babel-loader");
    }

    if (
      config.workspace.current === "common" ||
      config.workspace.current === "msc" ||
      config.workspace.current === "time4jobs"
    ) {
      webpackConfig.externals({ vue: "Vue" });
    }

    // console.log(path.resolve(__dirname, "."));
    // console.log(webpackConfig.plugins);

    webpackConfig.output
      .filename((chunkData) => {
        // if(chunkData.chunk.name === 'common-nav') {
        // console.log(chunkData.chunk);
        // process.exit()
        // }
        return path.join(
          workspace.jsPath,
          `[name].[${
            config.env.current == config.env.dev ? "hash" : "contenthash"
          }].js`
        );
      })
      .chunkFilename(path.join(workspace.jsPath, workspace.chunkFilename))
      .jsonpFunction(config.workspace.current);

    // staging / production don't build html
    if (
      !config.local &&
      (config.env.current === config.env.prod ||
        config.env.current === config.env.staging) &&
      config.spaPages.indexOf(config.workspace.current) === -1
    ) {
      Object.keys(workspace.pages).map(function (key) {
        webpackConfig.plugins.delete("html-" + key);
        webpackConfig.plugins.delete("preload-" + key);
        webpackConfig.plugins.delete("prefetch-" + key);
      });
    }

    // 關閉 public 複製
    if (webpackConfig.plugins.has("copy")) {
      webpackConfig.plugins.delete("copy");
    }

    // treat any tag that starts with adsmart-ui as custom elements
    webpackConfig.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          ...options.compilerOptions,
          isCustomElement: (tag) => tag.startsWith("adsmart-ui")
        }
      }));
  },
  transpileDependencies: [
    "dom7",
    "swiper",
    "vue-swipe-actions"
    //   // can be string or regex
    //   "@vue/web-component-wrapper"
  ],
  pluginOptions: {
    storybook: {
      allowedPlugins: ["define"]
    }
  },
  devServer: {
    overlay: {
      warnings: false
    },
    proxy: proxy,
    port: config.port
    // proxy: "http://localhost:8083"
  }
};
