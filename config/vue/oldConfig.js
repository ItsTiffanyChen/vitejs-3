const args = require("minimist")(process.argv.slice(2));
// const glob = require("glob-all");
const path = require("path");
const workspace = process.env.workspace || "dev";
const local = args.local || false;
const vueEnv = Object.keys(process.env)
  .filter((x) => /^VUE_APP_/.test(x))
  .reduce((acc, cur, i) => ({ ...acc, [cur]: process.env[cur] }), {});
const isUnitTest = !!~args._.indexOf("tests/unit");

const sharedConfig = (env = {}) => ({
  path: {
    // frontendTemplate: "templates/",
    // entry: "src/pages/",
    publicPath: local ? "/" : env.VUE_APP_CDN_URL
  },
  env: {
    current: env.VUE_APP_ENV,
    dev: "development",
    lab: "lab",
    staging: "staging",
    prod: "production"
  },
  isUnitTest,
  local: local,
  port: env.VUE_APP_PORT,
  // vueEnv: vueEnv,
  workspace: {
    current: workspace,
    default: "dev",
    dev: "dev",
    cmy104: "cmy104",
    cindex: "cindex",
    common: "common",
    msc: "msc",
    time4jobs: "time4jobs",
    free: "free",
    jb: "jb",
    profile: "profile",
    test: "test"
  },
  // purgeCssConfig: {
  //   paths: glob.sync([
  //     path.join(__dirname, "../../src/**/*.vue"),
  //     path.join(__dirname, "../../src/**/*.js")
  //   ]),
  //   whitelistPatterns: [
  //     /(introjs|VueCarousel|swiper|cropper|tooltip|^animate-|^leaflet|^vue-slider|^form-element-tag|^swipeout|^ql-)/
  //   ]
  // },
  preview: {
    status: !!args.preview,
    project: env.TRAVIS_BRANCH ? env.TRAVIS_BRANCH.split("/")[1] : ""
  },
  spaPages: ["time4jobs", "profile"]
});
// const config = {
//   path: {
//     frontendTemplate: "templates/",
//     entry: "src/pages/",
//     publicPath: local ? "/" : process.env.VUE_APP_CDN_URL
//   },
//   env: {
//     current: process.env.VUE_APP_ENV,
//     dev: "development",
//     lab: "lab",
//     staging: "staging",
//     prod: "production"
//   },
//   isUnitTest,
//   local: local,
//   port: process.env.VUE_APP_PORT,
//   vueEnv: vueEnv,
//   workspace: {
//     current: workspace,
//     default: "dev",
//     dev: "dev",
//     cmy104: "cmy104",
//     cindex: "cindex",
//     common: "common",
//     msc: "msc",
//     time4jobs: "time4jobs",
//     free: "free",
//     jb: "jb",
//     profile: "profile"
//   },
//   // purgeCssConfig: {
//   //   paths: glob.sync([
//   //     path.join(__dirname, "../../src/**/*.vue"),
//   //     path.join(__dirname, "../../src/**/*.js")
//   //   ]),
//   //   whitelistPatterns: [
//   //     /(introjs|VueCarousel|swiper|cropper|tooltip|^animate-|^leaflet|^vue-slider|^form-element-tag|^swipeout|^ql-)/
//   //   ]
//   // },
//   preview: {
//     status: !!args.preview,
//     project: process.env.TRAVIS_BRANCH
//       ? process.env.TRAVIS_BRANCH.split("/")[1]
//       : ""
//   },
//   spaPages: ["time4jobs", "profile"]
// };

module.exports = sharedConfig;
