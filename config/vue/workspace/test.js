const Page = require("../modules/page.js");

const scope = "test-";
let pages = [];

pages.push(
  new Page(
    "test/index/index.js",
    "test/index/index.html",
    "test index title",
    `${scope}index`
  )
);

pages.push(
  new Page(
    "test/main/index.js",
    "test/main/index.html",
    "test main title",
    `${scope}main`
  )
);

pages.push(
  new Page(
    "test/master/index.js",
    "test/master/index.html",
    "test master title",
    `${scope}master`
  )
);

module.exports = {
  name: "test",
  pages,
  singleFile: false,
  manifest: "test.230104.new-manifest.json",
  outputPath: "dist/test",
  jsPath: "assets/js",
  assetsPath: "assets",
  publicPath: (config) =>
    config.preview.status
      ? `/${config.preview.project}/test/`
      : config.path.publicPath + "test/"
  // optimization
};
