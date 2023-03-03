// terminal 文字顏色，有用到，不要移除
require("colors");
const Table = require("cli-table");

function printSettings({ workspace, config }) {
  const settingsTable = new Table({
    head: ["output".green, "assets".green, "jsPath".green]
  });
  settingsTable.push([
    workspace.outputPath,
    workspace.assetsPath,
    workspace.jsPath
  ]);
  console.log(`目前環境設定(${config.workspace.current})`.bgGreen.black);
  console.log(settingsTable.toString());
}

module.exports = printSettings;
