/**
 * Common 共用元件
 * 各頁面上都有出現、各單位比較常會放到各種不同頁面上，流量大，vendor盡量維持輕量。
 *
 */

const config = require("../oldConfig");
const Page = require("../modules/page");
const scope = "common-";
let pages = {};

pages[`${scope}footer`] = new Page(
  config.path.entry + "common/footer/index.js",
  config.path.frontendTemplate + "common/footer/index.html",
  config.env.current === config.env.dev
    ? "common/footer/index.html"
    : "pages/footer/index.html",
  "Common - Footer",
  `${scope}footer`
);

pages[`${scope}footer-cmain`] = new Page(
  config.path.entry + "common/footer-cmain/index.js",
  config.path.frontendTemplate + "common/footer/index.html",
  config.env.current === config.env.dev
    ? "common/footer-cmain/index.html"
    : "pages/footer-cmain/index.html",
  "Common - Footer - Cmain",
  `${scope}footer-cmain`
);

// pages[`${scope}nav`] = new Page(
//   config.path.entry + "common/nav/index.js",
//   config.path.frontendTemplate + "common/nav/index.html",
//   config.env.current === config.env.dev
//     ? "common/nav/index.html"
//     : "pages/nav/index.html",
//   "Common - Nav",
//   `${scope}nav`
// );

// pages[`${scope}popups-safety`] = new Page(
//   config.path.entry + "common/popups/safety/index.js",
//   config.path.frontendTemplate + "common/popups/safety/index.html",
//   config.env.current === config.env.dev
//     ? "common/popups/safety/index.html"
//     : "pages/popups/safety/index.html",
//   "Common - PopupsSafety",
//   `${scope}popups-safety`
// );

// pages[`${scope}popups-popupContainer`] = new Page(
//   config.path.entry + "common/popups/popupContainer/index.js",
//   config.path.frontendTemplate + "common/popups/popupContainer/index.html",
//   config.env.current === config.env.dev
//     ? "common/popups/popupContainer/index.html"
//     : "pages/popups/popupContainer/index.html",
//   "Common - popupContainer",
//   `${scope}popups-popupContainer`
// );

// pages[`${scope}higherChoice`] = new Page(
//   config.path.entry + "common/higherChoice/index.js",
//   config.path.frontendTemplate + "common/higherChoice/index.html",
//   config.env.current === config.env.dev
//     ? "common/higherChoice/index.html"
//     : "pages/higherChoice/index.html",
//   "Common - higherChoice",
//   `${scope}higherChoice`
// );

// pages[`${scope}sidebar-tool`] = new Page(
//   config.path.entry + "common/tool/sidebarTool/index.js",
//   config.path.frontendTemplate + "common/tool/sidebarTool/index.html",
//   config.env.current === config.env.dev
//     ? "common/tool/sidebarTool/index.html"
//     : "pages/tool/sidebarTool/index.html",
//   "Common - SidebarTool",
//   `${scope}sidebar-tool`
// );

// pages[`${scope}preview-freshman`] = new Page(
//   config.path.entry + "common/preview/freshman/index.js",
//   config.path.frontendTemplate + "common/preview/freshman/index.html",
//   config.env.current === config.env.dev
//     ? "common/preview/freshman/index.html"
//     : "pages/preview/freshman/index.html",
//   "Common-Preview-Freshman",
//   `${scope}preview-freshman`
// );

// pages[`${scope}preview-changejob`] = new Page(
//   config.path.entry + "common/preview/changejob/index.js",
//   config.path.frontendTemplate + "common/preview/changejob/index.html",
//   config.env.current === config.env.dev
//     ? "common/preview/changejob/index.html"
//     : "pages/preview/changejob/index.html",
//   "Common-Preview-ChangeJob",
//   `${scope}preview-changejob`
// );

// pages[`${scope}preview-newjob`] = new Page(
//   config.path.entry + "common/preview/newjob/index.js",
//   config.path.frontendTemplate + "common/preview/newjob/index.html",
//   config.env.current === config.env.dev
//     ? "common/preview/newjob/index.html"
//     : "pages/preview/newjob/index.html",
//   "Common-Preview-NewJob",
//   `${scope}preview-newjob`
// );

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
    ? `https://preview.f2e.s3.104-dev.com.tw/${config.preview.project}/common/v1.0/`
    : config.path.publicPath + "common/v1.0/",
  assets: "assets",
  output: "dist/common/v1.0/",
  manifest: "",
  assetsList: "",
  jsPath: "assets/js",
  chunkFilename: `[id].[${
    config.env.current === config.env.dev ? "hash" : "contenthash"
  }].js`,
  optimization: {
    splitChunks: {
      minSize: 0,
      maxInitialRequests: Infinity,
      cacheGroups: {
        // vendors: {
        //   name: "chunk-vendors",
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10,
        //   chunks: "initial",
        //   enforce: true
        // }
        // common: {
        //   name: "chunk-common",
        //   minChunks: 2,
        //   priority: -20,
        //   chunks: "initial",
        //   reuseExistingChunk: true
        // }
      }
    }
  },
  extractCss: false,
  purgeCssConfig: config.purgeCssConfig
};

module.exports = { pages, ...settings };
