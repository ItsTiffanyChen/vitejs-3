/*
給產 library(只產生一隻 js) 的 workspace 使用，目前有 msc & common
*/
const { spawn } = require("node:child_process");
const fs = require("fs");
const path = require("path");
const args = require("minimist")(process.argv.slice(2));
const getWorkspace = require("../config/vue/workspace.js");

const { pages, name } = getWorkspace();
console.log("argssss", args);

if (!pages.length) {
  process.exit(1);
}

let originalDirPath;
function moveToTemp(srcDir, destDir, finalDestDir = destDir) {
  const files = fs.readdirSync(srcDir);

  files.forEach((file) => {
    const filePath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    if (fs.statSync(filePath).isDirectory()) {
      moveToTemp(filePath, destPath, finalDestDir);
    } else if (filePath.includes("/assets/js/")) {
      originalDirPath = srcDir;
      const finalPath = path.join(finalDestDir, file);
      fs.renameSync(filePath, finalPath);
    }
  });
}

function moveBackToDist(srcDir) {
  const files = fs.readdirSync(srcDir);
  files.forEach((file) => {
    const filePath = path.join(srcDir, file);
    const finalPath = path.join(originalDirPath, file);
    fs.renameSync(filePath, finalPath);
  });
}

let pageIndex = 0;
(function buildLib() {
  try {
    const res = spawn(
      "yarn",
      ["vite", "build", "--mode", args.mode || "development"],
      {
        env: {
          ...process.env,
          workspace: name,
          pageIndex
        }
      }
    );

    res.stdout.on("data", (data) => {
      console.log(`${data}`);
    });

    res.stderr.on("data", (data) => {
      console.error(`${data}`);
    });

    res.on("exit", (code) => {
      const srcDir = "dist";
      const destDir = "temp";
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      moveToTemp(srcDir, destDir);
      pageIndex += 1;

      if (pageIndex === pages.length) {
        moveBackToDist(destDir);
        console.log(`build done with code ${code}`);
        process.exit();
      } else {
        buildLib();
      }
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
