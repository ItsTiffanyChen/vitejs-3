const config = require("../oldConfig");
const Page = require("../modules/page");
const scope = "jb";
let pages = {};

pages[`${scope}`] = new Page(
  config.path.entry + "jb/index.js",
  config.path.frontendTemplate + "jb/index.html",
  config.env.current === config.env.dev
    ? "jb/index.html"
    : "pages/jb/index.html",
  "jb.css",
  `${scope}`
);

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
  assets: "",
  output: "dist",
  manifest: "",
  assetsList: "",
  jsPath: "js",
  chunkFilename: `[id].[contenthash].js`,
  extractCss: { filename: "css/[name].css" }
};

module.exports = { pages, ...settings };
