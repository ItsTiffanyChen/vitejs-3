const config = require("../oldConfig");
const Page = require("../modules/page");
const scope = "cmy104-";
let pages = {};

// 拆分 vendor 設定
const chunkVendors = [
  "core-js",
  "lodash",
  "vue",
  "vuedraggable",
  "sortablejs",
  "vuelidate",
  "vue-lazyload"
];

const chunkSplitRegex = RegExp(
  `[\\/]node_modules[\\/](${chunkVendors.join("|")})([\\/]|$)`
);

pages[`${scope}index`] = new Page(
  config.path.entry + "cmy104/index/index.js",
  config.path.frontendTemplate + "cmy104/index/index.html",
  config.env.current === config.env.dev
    ? "cmy104/index.html"
    : "pages/index/index.html",
  "104會員中心",
  `${scope}index`,
  { chunkVendors }
);

pages[`${scope}cprofile-resume`] = new Page(
  config.path.entry + "cmy104/profile/edit/index.js",
  config.path.frontendTemplate + "cmy104/profile/edit/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/edit/index.html"
    : "pages/profile/edit/index.html",
  "第二份履歷 - 104會員中心",
  `${scope}cprofile-resume`,
  { chunkVendors }
);

pages[`${scope}cprofile-simpleResume`] = new Page(
  config.path.entry + "cmy104/profile/simple/index.js",
  config.path.frontendTemplate + "cmy104/profile/simple/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/simple/index.html"
    : "pages/profile/simple/index.html",
  "編輯簡歷 - 104會員中心",
  `${scope}cprofile-simpleResume`,
  { chunkVendors }
);

pages[`${scope}cprofile-overview`] = new Page(
  config.path.entry + "cmy104/profile/index/index.js",
  config.path.frontendTemplate + "cmy104/profile/index/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/index/index.html"
    : "pages/profile/index/index.html",
  "我的履歷 - 104會員中心",
  `${scope}cprofile-overview`,
  { chunkVendors }
);

pages[`${scope}cprofile-preview`] = new Page(
  config.path.entry + "cmy104/profile/preview/index.js",
  config.path.frontendTemplate + "cmy104/profile/preview/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/preview/index.html"
    : "pages/profile/preview/index.html",
  "預覽履歷 - 104會員中心",
  `${scope}cprofile-preview`,
  { chunkVendors }
);

pages[`${scope}cprofile-pdf`] = new Page(
  config.path.entry + "cmy104/profile/pdf/index.js",
  config.path.frontendTemplate + "cmy104/profile/preview/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/pdf/index.html"
    : "pages/profile/pdf/index.html",
  "履歷下載 - 104會員中心",
  `${scope}cprofile-pdf`,
  { chunkVendors }
);

pages[`${scope}cprofile-ibon`] = new Page(
  config.path.entry + "cmy104/profile/ibon/index/index.js",
  config.path.frontendTemplate + "cmy104/profile/ibon/index/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/ibon/index/index.html"
    : "pages/profile/ibon/index/index.html",
  "ibon列印 - 104會員中心",
  `${scope}cprofile-ibon`,
  { chunkVendors }
);

pages[`${scope}cprofile-applySnapshot`] = new Page(
  config.path.entry + "cmy104/profile/apply-snapshot/index/index.js",
  config.path.frontendTemplate +
    "cmy104/profile/apply-snapshot/index/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/apply-snapshot/index/index.html"
    : "pages/profile/apply-snapshot/index/index.html",
  "應徵快照 - 104會員中心",
  `${scope}cprofile-applySnapshot`,
  { chunkVendors }
);

pages[`${scope}cprofile-example`] = new Page(
  config.path.entry + "cmy104/profile/example/index.js",
  config.path.frontendTemplate + "cmy104/profile/example/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/example/index.html"
    : "pages/profile/example/index.html",
  "履歷範例 - 104人力銀行",
  `${scope}cprofile-example`,
  { chunkVendors }
);

pages[`${scope}cprofile-set`] = new Page(
  config.path.entry + "cmy104/profile/set/index.js",
  config.path.frontendTemplate + "cmy104/profile/set/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/set/index.html"
    : "pages/profile/set/index.html",
  "履歷設定 - 104人力銀行",
  `${scope}cprofile-set`,
  { chunkVendors }
);

pages[`${scope}cprofile-share`] = new Page(
  config.path.entry + "cmy104/profile/share/index.js",
  config.path.frontendTemplate + "cmy104/profile/share/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/share/index.html"
    : "pages/profile/share/index.html",
  "分享履歷連結 - 104人力銀行",
  `${scope}cprofile-share`,
  { chunkVendors }
);

pages[`${scope}cprofile-intro`] = new Page(
  config.path.entry + "cmy104/profile/intro/index.js",
  config.path.frontendTemplate + "cmy104/profile/intro/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/intro/index.html"
    : "pages/profile/intro/index.html",
  "2020 全新履歷 改版登場－104人力銀行",
  `${scope}cprofile-intro`,
  { chunkVendors }
);

pages[`${scope}cprofile-under18-upload`] = new Page(
  config.path.entry + "cmy104/profile/under18-upload/index.js",
  config.path.frontendTemplate + "cmy104/profile/under18-upload/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/under18-upload/index.html"
    : "pages/profile/under18-upload/index.html",
  "未滿18歲身份驗證 - 104人力銀行",
  `${scope}cprofile-under18-upload`,
  { chunkVendors }
);

pages[`${scope}cprofile-applyMsg`] = new Page(
  config.path.entry + "cmy104/profile/applyMsg/index.js",
  config.path.frontendTemplate + "cmy104/profile/applyMsg/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/applyMsg/index.html"
    : "pages/profile/applyMsg/index.html",
  "自我推薦信 - 104會員中心",
  `${scope}cprofile-applyMsg`,
  { chunkVendors }
);

pages[`${scope}app-sample`] = new Page(
  config.path.entry + "cmy104/app/sample/index.js",
  config.path.frontendTemplate + "cmy104/app/sample/index.html",
  config.env.current === config.env.dev
    ? "cmy104/app/sample/index.html"
    : "pages/app/sample/index.html",
  "CAPP履歷範例 - 104人力銀行",
  `${scope}app-sample`,
  { chunkVendors }
);

pages[`${scope}applyRecord`] = new Page(
  config.path.entry + "cmy104/applyRecord/index.js",
  config.path.frontendTemplate + "cmy104/applyRecord/index.html",
  config.env.current === config.env.dev
    ? "cmy104/applyRecord/index.html"
    : "pages/applyRecord/index.html",
  "應徵紀錄 - 104人力銀行",
  `${scope}applyRecord`,
  { chunkVendors }
);

pages[`${scope}jobStore`] = new Page(
  config.path.entry + "cmy104/work/jobStore/main.ts",
  config.path.frontendTemplate + "cmy104/index/index.html",
  config.env.current === config.env.dev
    ? "cmy104/work/jobStore/index.html"
    : "pages/work/jobStore/index.html",
  "儲存工作 - 104人力銀行",
  `${scope}jobStore`,
  { chunkVendors }
);

pages[`${scope}companyStore`] = new Page(
  config.path.entry + "cmy104/work/companyStore/main.ts",
  config.path.frontendTemplate + "cmy104/index/index.html",
  config.env.current === config.env.dev
    ? "cmy104/work/companyStore/index.html"
    : "pages/work/companyStore/index.html",
  "儲存公司 - 104人力銀行",
  `${scope}companyStore`,
  { chunkVendors }
);

pages[`${scope}work-interview`] = new Page(
  config.path.entry + "cmy104/work/interview/index.js",
  config.path.frontendTemplate + "cmy104/work/interview/index.html",
  config.env.current === config.env.dev
    ? "cmy104/work/interview/index.html"
    : "pages/work/interview/index.html",
  "簡訊服務 - 104人力銀行",
  `${scope}work-interview`,
  { chunkVendors }
);

pages[`${scope}work-peruseRecord`] = new Page(
  config.path.entry + "cmy104/work/peruseRecord/index.js",
  config.path.frontendTemplate + "cmy104/work/peruseRecord/index.html",
  config.env.current === config.env.dev
    ? "cmy104/work/peruseRecord/index.html"
    : "pages/work/peruseRecord/index.html",
  "工作 - 看過我的公司 - 104會員中心",
  `${scope}work-peruseRecord`,
  { chunkVendors }
);

pages[`${scope}error-authenticate`] = new Page(
  config.path.entry + "cmy104/error/authenticate/index.js",
  config.path.frontendTemplate + "cmy104/index/index.html",
  config.env.current === config.env.dev
    ? "cmy104/error/authenticate/index.html"
    : "pages/error/authenticate/index.html",
  "Out - 104會員中心",
  `${scope}error-authenticate`,
  { chunkVendors }
);

pages[`${scope}work-message`] = new Page(
  config.path.entry + "cmy104/work/message/index.js",
  config.path.frontendTemplate + "cmy104/work/message/index.html",
  config.env.current === config.env.dev
    ? "cmy104/work/message/index.html"
    : "pages/work/message/index.html",
  "通知我的公司 - 104會員中心",
  `${scope}work-message`,
  { chunkVendors }
);

pages[`${scope}work-mate`] = new Page(
  config.path.entry + "cmy104/work/mate/index.js",
  config.path.frontendTemplate + "cmy104/work/mate/index.html",
  config.env.current === config.env.dev
    ? "cmy104/work/mate/index.html"
    : "pages/work/mate/index.html",
  "工作 - 專屬工作 - 104會員中心",
  `${scope}work-mate`,
  { chunkVendors }
);

pages[`${scope}error-404`] = new Page(
  config.path.entry + "cmy104/error/404/index.js",
  config.path.frontendTemplate + "cmy104/index/index.html",
  config.env.current === config.env.dev
    ? "cmy104/error/404/index.html"
    : "pages/error/404/index.html",
  "404 - 104會員中心",
  `${scope}error-404`,
  { chunkVendors }
);

pages[`${scope}error-500`] = new Page(
  config.path.entry + "cmy104/error/500/index.js",
  config.path.frontendTemplate + "cmy104/index/index.html",
  config.env.current === config.env.dev
    ? "cmy104/error/500/index.html"
    : "pages/error/500/index.html",
  "500 - 104會員中心",
  `${scope}error-500`,
  { chunkVendors }
);

pages[`${scope}service`] = new Page(
  config.path.entry + "cmy104/activate/index.js",
  config.path.frontendTemplate + "cmy104/activate/index.html",
  config.env.current === config.env.dev
    ? "cmy104/activate/index.html"
    : "pages/activate/index.html",
  "啟用服務頁 - 104會員中心",
  `${scope}service`,
  { chunkVendors }
);

pages[`${scope}settings-epaper`] = new Page(
  config.path.entry + "cmy104/settings/epaper/index.js",
  config.path.frontendTemplate + "cmy104/settings/epaper/index.html",
  config.env.current === config.env.dev
    ? "cmy104/settings/epaper/index.html"
    : "pages/settings/epaper/index.html",
  "訂閱電子報 - 104人力銀行",
  `${scope}settings-epaper`,
  { chunkVendors }
);

pages[`${scope}representative-agreement`] = new Page(
  config.path.entry + "cmy104/representative-agreement/index.js",
  config.path.frontendTemplate + "cmy104/representative-agreement/index.html",
  config.env.current === config.env.dev
    ? "cmy104/representative-agreement/index.html"
    : "pages/representative-agreement/index.html",
  "法定代理人同意書表單 - 104人力銀行",
  `${scope}representative-agreement`,
  { chunkVendors }
);

pages[`${scope}cprofile-representative-agreement`] = new Page(
  config.path.entry + "cmy104/profile/representative-agreement/index.js",
  config.path.frontendTemplate +
    "cmy104/profile/representative-agreement/index.html",
  config.env.current === config.env.dev
    ? "cmy104/profile/representative-agreement/index.html"
    : "pages/profile/representative-agreement/index.html",
  "查看法定代理人同意書 - 104會員中心",
  `${scope}cprofile-representative-agreement`,
  { chunkVendors }
);

pages[`${scope}preparative`] = new Page(
  config.path.entry + "cmy104/preparative/index.js",
  config.path.frontendTemplate + "cmy104/preparative/index.html",
  config.env.current === config.env.dev
    ? "cmy104/preparative/index.html"
    : "pages/preparative/index.html",
  "註冊及啟用My104 - 104人力銀行",
  `${scope}preparative`,
  { chunkVendors }
);

pages[`${scope}viewjobRecord`] = new Page(
  config.path.entry + "cmy104/viewjobRecord/index.js",
  config.path.frontendTemplate + "cmy104/viewjobRecord/index.html",
  config.env.current === config.env.dev
    ? "cmy104/viewjobRecord/index.html"
    : "pages/viewjobRecord/index.html",
  "瀏覽記錄 - 104人力銀行",
  `${scope}viewjobRecord`,
  { chunkVendors }
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
  publicPath: config.preview.status
    ? `/${config.preview.project}/cmy104/`
    : config.path.publicPath + "cmy104/",
  assets: "assets",
  output: "dist/cmy104",
  manifest: "cmy104.230104.manifest.json",
  assetsList: "cmy104.230104.new-manifest.json",
  jsPath: "assets/js",
  chunkFilename: `[id].[${
    config.env.current === config.env.dev ? "hash" : "contenthash"
  }].js`,
  optimization: {
    splitChunks: {
      minSize: 0,
      maxInitialRequests: Infinity,
      cacheGroups: {
        package: {
          name(module) {
            const packageName = module.context.match(chunkSplitRegex)[1];
            return packageName.replace("@", "");
          },
          test: chunkSplitRegex,
          chunks: "initial"
        },
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
