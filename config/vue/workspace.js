// terminal 文字顏色，有用到，不要移除
require("colors");
const test = require("./workspace/test");
// const getConfig = require("./oldConfig");

const emptyWorkspace = {
  name: "",
  singleFile: false,
  manifest: "",
  assetsList: "",
  outputPath: "dist",
  jsPath: "assets/js",
  assetsPath: "assets",
  publicPath: (config) => "/"
};

module.exports = () => {
  const config = { workspace: "" };
  let workspace = {};

  const pages = process.env.pages;
  switch (process.env.workspace) {
    case config.workspace.test:
      workspace = test;
      break;
    case config.workspace.free:
      workspace = {
        ...emptyWorkspace,
        pages: [
          ...test.pages
          //...
        ]
      };
      if (!pages) {
        console.log("請設定pageKey，用逗號「,」區隔!".red);
        process.exit();
      } else {
        const customPages = pages.split(",");
        workspace.pages = workspace.pages.filter(
          (page) => customPages.indexOf(page.name) !== -1
        );
        if (workspace.pages.length == 0) {
          console.log("沒有找到任何頁面，請重新設定".red);
          process.exit();
        }
      }
      break;
    default:
      workspace = {
        ...emptyWorkspace,
        pages: [
          ...test.pages
          //...
        ]
      };
      break;
  }

  return workspace;
};

/*
舊的 workspace:

const args = require("minimist")(process.argv.slice(2));
const fs = require("fs");
const path = require("path");
const sharedConfig = require("./config");
const Page = require("./modules/page");
// const workspaceCMy104 = require("./workspace/cmy104");
// const workspaceCIndex = require("./workspace/cindex");
const workspaceMSC = require("./workspace/msc");
const workspaceCommon = require("./workspace/common");
// const workspaceJb = require("./workspace/jb");
// const workspaceTime4Jobs = require("./workspace/time4jobs");
// const workspaceProfile = require("./workspace/profile");
const pick = require("lodash/pick");
const clc = require("cli-color");

function workspace(env) {
  const config = sharedConfig(env);
  const localPath = path.resolve(__dirname, ".") + "/workspace/local.js";
  let workspace = {};
  let workspaceLocal;

  console.log("oeioqejfwef", process.env.pages);

  switch (config.workspace.current) {
    // case config.workspace.cmy104:
    //   workspace = workspaceCMy104;
    //   break;
    // case config.workspace.cindex:
    //   workspace = workspaceCIndex;
    //   break;
    // case config.workspace.time4jobs:
    //   workspace = workspaceTime4Jobs;
    //   if (config.env.dev === config.env.current) {
    //     workspace = {
    //       ...workspace,
    //       ...Page.getDevelopSettings
    //     };
    //   }
    //   break;
    case config.workspace.common:
      workspace = workspaceCommon;
      break;
    case config.workspace.msc:
      workspace = workspaceMSC;
      break;
    // case config.workspace.jb:
    //   workspace = workspaceJb;
    //   break;
    // case config.workspace.profile:
    //   workspace = workspaceProfile;
    //   break;
    case config.workspace.free: {
      console.log("aloha", process.env.pages);
      workspace.pages = {
        // ...workspaceCMy104.pages,
        // ...workspaceCIndex.pages,
        ...workspaceCommon.pages,
        ...workspaceMSC.pages
      };
      const envPages = process.env.pages || "";
      if (envPages == "") {
        console.log("請設定pageKey，用逗號「,」區隔!".red);
        process.exit();
      } else {
        const customPages = envPages.split(",");
        workspace.pages = pick(workspace.pages, customPages);
        if (Object.keys(workspace.pages).length == 0) {
          console.log("沒有找到任何頁面，請重新設定".red);
          process.exit();
        }
      }
      break;
    }
    default:
      workspace.pages = {
        // ...workspaceCMy104.pages,
        // ...workspaceCIndex.pages,
        ...workspaceCommon.pages
      };
      break;
  }

  if (config.env.dev === config.env.current || !!args.storybook) {
    try {
      if (fs.existsSync(localPath)) {
        workspaceLocal = require(localPath);
        console.log("******************************".yellow);
        console.log("偵測到有本機頁面，載入本機頁面設定。".yellow);
        console.log("******************************".yellow);
        workspace.pages = {
          ...workspaceLocal.pages,
          ...workspace.pages
        };
        localCounts = Object.keys(workspaceLocal).length;
      }
    } catch (err) {
      console.log(err);
      process.exit();
    }

    if (config.isUnitTest) {
      workspace.pages = {};
    }

    workspace = {
      ...workspace,
      ...Page.getDevelopSettings
    };
  }
  return workspace;
}

module.exports = workspace;

*/
