const config = require("../oldConfig");
const scope = "local-";
let pages = {};

if (config.env.current === config.env.dev) {
  // 只在 development 開發用的頁面
  // 可自行新增頁面！
  // 当使用只有入口的字符串格式时，
  // 模板会被推导为 `public/about.html`
  // 并且如果找不到的话，就回退到 `public/index.html`。
  // 输出文件名会被推导为 `about.html`。
  pages[`${scope}cprofile`] = {
    entry: config.path.entry + "local/cprofile/preview/index.js",
    template: config.path.frontendTemplate + "cmy104/cprofile/index.html",
    filename: "local/cprofile/preview/index.html",
    title: "Preview",
    chunks: ["chunk-vendors", "chunk-common", `${scope}cprofile`],
    envs: config.vueEnv
  };
}

if (config.env.current === config.env.lab) {
  // 只在 lab 產出的頁面 如果有需要用到的話
}

if (config.env.current === config.env.staging) {
  // 只在 staging 產出的頁面 如果有需要用到的話
}

module.exports = pages;
