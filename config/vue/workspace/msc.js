/**
 * Micro Service Component 微服務元件
 * 客製、針對各種需求使用套件，泛指為某些頁面、功能寫的
 *
 */
const config = require("../oldConfig");
const Page = require("../modules/page");
const scope = "msc-";
let pages = {};

const cprofileComponents = [
  "info",
  "bio",
  "certificate",
  "education",
  "experience",
  "jobCondition",
  "language",
  "portfolio",
  "project",
  "referrer",
  "skill"
];

cprofileComponents.map((component) => {
  pages[`${scope}${component}`] = new Page(
    config.path.entry + `msc/resume-component/${component}/index.js`,
    config.path.frontendTemplate + "msc/resume-component/index.html",
    config.env.current === config.env.dev
      ? `msc/resume-component/${component}/index.html`
      : `pages/msc/resume-component/${component}/index.html`,
    `MSC - ${component} component`,
    `${scope}${component}`,
    { appName: `msc-resume-${component}` }
  );
});

pages[`${scope}custom`] = new Page(
  config.path.entry + `msc/resume-component/custom/index.js`,
  config.path.frontendTemplate + "msc/resume-component/custom.html",
  config.env.current === config.env.dev
    ? `msc/resume-component/custom/index.html`
    : `pages/msc/resume-component/custom/index.html`,
  `MSC - custom component`,
  `${scope}custom`,
  { appName: `msc-resume-custom` }
);

pages[`${scope}resume`] = new Page(
  config.path.entry + "msc/resume/index.js",
  config.path.frontendTemplate + "msc/resume/index.html",
  config.env.current === config.env.dev
    ? "msc/resume/index.html"
    : "pages/msc/resume/index.html",
  "MSC - Resume",
  `${scope}resume`,
  { appName: `msc-resume` }
);

pages[`${scope}student-findJob`] = new Page(
  config.path.entry + "msc/student/findJob/index.js",
  config.path.frontendTemplate + "msc/student/findJob/index.html",
  config.env.current === config.env.dev
    ? "msc/student/findJob/index.html"
    : "pages/msc/student/findJob/index.html",
  "MSC - studentFindJob",
  `${scope}student-findJob`
);

pages[`${scope}student-intern`] = new Page(
  config.path.entry + "msc/student/intern/index.js",
  config.path.frontendTemplate + "msc/student/intern/index.html",
  config.env.current === config.env.dev
    ? "msc/student/intern/index.html"
    : "pages/msc/student/intern/index.html",
  "MSC - studentIntern",
  `${scope}student-intern`
);

pages[`${scope}cancelApply`] = new Page(
  config.path.entry + "msc/cancelApply/index.js",
  config.path.frontendTemplate + "msc/cancelApply/index.html",
  config.env.current === config.env.dev
    ? "msc/cancelApply/index.html"
    : "pages/msc/cancelApply/index.html",
  "MSC - cancelApply",
  `${scope}cancelApply`
);

pages[`${scope}mobile`] = new Page(
  config.path.entry + "msc/mobile/index.js",
  config.path.frontendTemplate + "msc/mobile/index.html",
  config.env.current === config.env.dev
    ? "msc/mobile/index.html"
    : "pages/msc/mobile/index.html",
  "MSC - 工作快找APP",
  `${scope}mobile`
);

pages[`${scope}wysiwyg`] = new Page(
  config.path.entry + "msc/wysiwyg/index.js",
  config.path.frontendTemplate + "msc/wysiwyg/index.html",
  config.env.current === config.env.dev
    ? "msc/wysiwyg/index.html"
    : "pages/msc/wysiwyg/index.html",
  "MSC - wysiwyg",
  `${scope}wysiwyg`,
  { appName: `msc-wysiwyg` }
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
    ? `https://preview.f2e.s3.104-dev.com.tw/${config.preview.project}/msc/`
    : config.path.publicPath + "msc/",
  assets: "assets",
  output: "dist/msc",
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
