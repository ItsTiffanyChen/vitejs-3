const { spawn } = require("node:child_process");
const args = require("minimist")(process.argv.slice(2));

(async function serveFreePages() {
  try {
    const res = spawn("yarn", ["serve"], {
      env: {
        ...process.env,
        workspace: "free",
        pages: args.pages
      }
    });

    res.stdout.on("data", (data) => {
      console.log(`${data}`);
    });

    res.stderr.on("data", (data) => {
      console.error(`${data}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
