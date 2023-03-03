const path = require("path");

class Page {
  /**
   * Creates an instance of Page.
   * @param {*} entry page 的入口
   * @param {*} template 模板來源
   * @param {*} title 會傳入 ejs 的變數 title 底下，key 為 chunkName，可以在 html 中以 <%- title[{chunkName}] %> 引入
   * @param {*} chunkName chunk 名稱，和最終產出 js 檔名一致
   * @param {*} [options={}]
   * appName 動態使用 ：會傳入 ejs 的變數 appName 底下，key 為 chunkName，<div id="<%= appName[{chunkName}] %>">
   * chunkVendors 自訂拆分檔案
   * @memberof Page
   */
  constructor(
    entry, //
    template, //
    title,
    chunkName,
    options = {}
  ) {
    const { appName = "app", chunkVendors = [] } = options;
    return {
      entry: path.resolve(__dirname, `../../../src/pages/${entry}`),
      template: `templates/${template}`,
      title: title || "",
      chunkName,
      name: chunkName,
      // chunks: [
      //   ...chunkVendors,
      //   "chunk-vendors",
      //   "chunk-common",
      //   `${chunkName}`
      // ],
      // 只在 prod minify
      // minify: config.env.current === config.env.prod,
      // // 只在 dev inject
      // inject: config.env.current === config.env.dev,
      // // 把 env 給 htmlWebpackPlugin 使用
      // envs: config.vueEnv,
      appName
    };
  }

  /**
   * 開發時的環境設定
   *
   * @readonly
   * @static
   * @memberof Page
   */
  static get getDevelopSettings() {
    return {
      publicPath: (config) => "/",
      assetsPath: "assets",
      outputPath: "dist",
      manifest: "",
      jsPath: "assets/js",
      singleFile: false
      // chunkFilename: "[name].js",
      // optimization: {
      //   splitChunks: {
      //     cacheGroups: {
      //       vendors: {
      //         name: "chunk-vendors",
      //         test: /[\\\/]node_modules[\\\/]/,
      //         priority: -10,
      //         chunks: "initial",
      //         enforce: true
      //       },
      //       common: {
      //         name: "chunk-common",
      //         minChunks: 2,
      //         priority: -20,
      //         chunks: "initial",
      //         reuseExistingChunk: true
      //       }
      //     }
      //   }
      // },
    };
  }
}

module.exports = Page;
