const config = require("../oldConfig");
const Page = require("../modules/page");
const scope = "cindex-";
let pages = {};

// 拆分 vendor 設定
const chunkVendors = [
  "core-js",
  "vue",
  "v-tooltip",
  "vuelidate",
  "popper.js",
  "chart.js",
  "rollbar"
];
const chunkSplitRegex = RegExp(
  `[\\/]node_modules[\\/](${chunkVendors.join("|")})([\\/]|$)`
);

pages[`${scope}changejob`] = new Page(
  config.path.entry + "cindex/jobs/main/changejob/index.js",
  config.path.frontendTemplate + "cindex/jobs/main/changejob/index.html",
  config.env.current === config.env.dev
    ? "jobs/main/changejob/index.html"
    : "pages/jobs/main/changejob/index.html",
  "104 - 轉職專區",
  `${scope}changejob`,
  { chunkVendors }
);

pages[`${scope}newjob`] = new Page(
  config.path.entry + "cindex/jobs/main/newjob/index.js",
  config.path.frontendTemplate + "cindex/jobs/main/index.html",
  config.env.current === config.env.dev
    ? "jobs/main/newjob/index.html"
    : "pages/jobs/main/newjob/index.html",
  "104 - 最新工作",
  `${scope}newjob`,
  { chunkVendors }
);

pages[`${scope}freshman`] = new Page(
  config.path.entry + "cindex/jobs/main/freshman/index.js",
  config.path.frontendTemplate + "cindex/jobs/main/index.html",
  config.env.current === config.env.dev
    ? "jobs/main/freshman/index.html"
    : "pages/jobs/main/freshman/index.html",
  "104 - 新鮮人專區",
  `${scope}freshman`,
  { chunkVendors }
);

pages[`${scope}faq`] = new Page(
  config.path.entry + "cindex/faq/index.js",
  config.path.frontendTemplate + "cindex/faq/index.html",
  config.env.current === config.env.dev
    ? "faq/index.html"
    : "pages/faq/index.html",
  "104 - 常見問題",
  `${scope}faq`,
  { chunkVendors }
);

pages[`${scope}expats`] = new Page(
  config.path.entry + "cindex/expats/index.js",
  config.path.frontendTemplate + "cindex/expats/index.html",
  config.env.current === config.env.dev
    ? "expats/index.html"
    : "pages/expats/index.html",
  "104 - 外籍人士專區",
  `${scope}expats`,
  { chunkVendors }
);

pages[`${scope}index`] = new Page(
  config.path.entry + "cindex/company/index.js",
  config.path.frontendTemplate + "cindex/company/index.html",
  config.env.current === config.env.dev
    ? "company/index.html"
    : "pages/company/index.html",
  "104 - 公司頁",
  `${scope}index`,
  { chunkVendors }
);

pages[`${scope}sitemap`] = new Page(
  config.path.entry + "cindex/jobs/main/sitemap/index.js",
  config.path.frontendTemplate + "cindex/job/index.html",
  config.env.current === config.env.dev
    ? "jobs/main/sitemap/index.html"
    : "pages/jobs/main/sitemap/index.html",
  "104 - Sitemap",
  `${scope}sitemap`,
  { chunkVendors }
);

pages[`${scope}job`] = new Page(
  config.path.entry + "cindex/job/index/index.js",
  config.path.frontendTemplate + "cindex/job/index.html",
  config.env.current === config.env.dev
    ? "cindex/job/index.html"
    : "pages/job/index.html",
  "104 - 工作頁",
  `${scope}job`,
  { chunkVendors }
);

pages[`${scope}job-similar`] = new Page(
  config.path.entry + "cindex/job/similar/index.js",
  config.path.frontendTemplate + "cindex/job/index.html",
  config.env.current === config.env.dev
    ? "job/similar/index.html"
    : "pages/job/similar/index.html",
  "104 - 相似公司頁",
  `${scope}job-similar`,
  { chunkVendors }
);

pages[`${scope}404`] = new Page(
  config.path.entry + "cindex/error/404/index.js",
  config.path.frontendTemplate + "cindex/job/index.html",
  config.env.current === config.env.dev
    ? "cindex/error/404/index.html"
    : "pages/error/404/index.html",
  "104 - 404錯誤頁",
  `${scope}404`,
  { chunkVendors }
);

pages[`${scope}500`] = new Page(
  config.path.entry + "cindex/error/500/index.js",
  config.path.frontendTemplate + "cindex/job/index.html",
  config.env.current === config.env.dev
    ? "cindex/error/500/index.html"
    : "pages/error/500/index.html",
  "104 - 500錯誤頁",
  `${scope}500`,
  { chunkVendors }
);

pages[`${scope}info`] = new Page(
  config.path.entry + "cindex/info/index.js",
  config.path.frontendTemplate + "cindex/job/index.html",
  config.env.current === config.env.dev
    ? "cindex/info/index.html"
    : "pages/info/index.html",
  "",
  `${scope}info`,
  { chunkVendors }
);

pages[`${scope}analysis`] = new Page(
  config.path.entry + "cindex/jobs/apply/analysis/index.js",
  config.path.frontendTemplate + "cindex/job/index.html",
  config.env.current === config.env.dev
    ? "cindex/jobs/apply/analysis/index.html"
    : "pages/jobs/apply/analysis/index.html",
  "104 - 應徵分析",
  `${scope}analysis`,
  { chunkVendors }
);

pages[`${scope}csr`] = new Page(
  config.path.entry + "cindex/csr/index.js",
  config.path.frontendTemplate + "cindex/job/index.html",
  config.env.current === config.env.dev
    ? "cindex/csr/index.html"
    : "pages/csr/index.html",
  "104社企暖心大賞 - 好企業的好故事，創造更暖心的幸福環境",
  `${scope}csr`,
  { chunkVendors }
);

pages[`${scope}students`] = new Page(
  config.path.entry + "cindex/jobs/main/students/index.js",
  config.path.frontendTemplate + "cindex/jobs/main/index.html",
  config.env.current === config.env.dev
    ? "cindex/jobs/main/students/index.html"
    : "pages/jobs/main/students/index.html",
  "104 - 學生頁",
  `${scope}students`,
  { chunkVendors }
);

pages[`${scope}category`] = new Page(
  config.path.entry + "cindex/jobs/main/category/index.js",
  config.path.frontendTemplate + "cindex/jobs/main/category/index.html",
  config.env.current === config.env.dev
    ? "jobs/main/category/index.html"
    : "pages/jobs/main/category/index.html",
  "104 - 分類找工作",
  `${scope}category`,
  { chunkVendors }
);

pages[`${scope}feedback`] = new Page(
  config.path.entry + "cindex/feedback/index.js",
  config.path.frontendTemplate + "cindex/feedback/index.html",
  config.env.current === config.env.dev
    ? "cindex/feedback/index.html"
    : "pages/feedback/index.html",
  "意見回饋－104人力銀行",
  `${scope}feedback`,
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
    ? `/${config.preview.project}/cindex/`
    : config.path.publicPath + "cindex/",
  assets: "assets",
  output: "dist/cindex",
  manifest: "cindex.230105.manifest.json",
  assetsList: "cindex.230105.new-manifest.json",
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
