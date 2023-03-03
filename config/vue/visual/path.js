// terminal 文字顏色，有用到，不要移除
require("colors");
const Table = require("cli-table");

function printPath({ workspace, config }) {
  const table = new Table({ head: ["No".green, "Name".green, "Path".green] });
  table.push(
    ...workspace.pages.map((page, i) => {
      return [`${i + 1}`, `${page.name}`, `${page.template}`];
    })
  );
  console.log(`目前環境工作區頁面(${config.workspace.current})`.bgGreen.black);
  console.log(table.toString());
  console.log(`Start Compiling ... \n\n`.yellow);
}

module.exports = printPath;
