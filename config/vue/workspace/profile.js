const config = require("../oldConfig");
const Page = require("../modules/page");
const pageName = "profile";

const pages = {
  [pageName]: new Page(
    config.path.entry + "profile/index.js",
    config.path.frontendTemplate + "profile/index.html",
    config.env.current === config.env.dev || config.preview.status
      ? "profile/index.html"
      : "index.html",
    "104個人品牌",
    pageName
  )
};

if (config.env.current === config.env.dev) {
  // 只在 development 開發用的頁面
}

if (config.env.current === config.env.lab) {
  // 只在 lab 產出的頁面 如果有需要用到的話
}

if (config.env.current === config.env.staging) {
  // 只在 staging 產出的頁面 如果有需要用到的話
}

const settings = {
  publicPath: config.preview.status
    ? `/${config.preview.project}`
    : config.path.publicPath + "profile/",
  assets: "",
  output: "dist",
  manifest: "",
  assetsList: "",
  jsPath: "js",
  chunkFilename: `[id].[contenthash].js`,
  optimization: {
    splitChunks: {
      minSize: 0,
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendors: {
          name: "chunk-vendors",
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: "initial",
          enforce: true
        }
      }
    }
  },
  extractCss: true,
  purgeCssConfig: config.purgeCssConfig
};

module.exports = { pages, ...settings };
