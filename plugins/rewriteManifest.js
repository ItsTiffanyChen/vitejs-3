const fs = require("fs");
const uniq = require("lodash/uniq");
const path = require("path");
const stringify = require("json-stable-stringify");
const { URL } = require("url");

const rewriteManifest = ({ pages, manifest, outputPath, name, env }) => ({
  name: "rewriteManifest",
  async writeBundle(options, bundle) {
    // console.log(
    //   "bundleeeee",
    //   Object.keys(bundle),
    //   bundle["new-manifest.json"],
    //   pages
    // );
    const originalManifest = JSON.parse(bundle["new-manifest.json"].source);
    // console.log("original manifest", originalManifest);
    const getAllImports = (key, files = []) => {
      console.log("getAllImports", key);
      if (!originalManifest[key].imports) {
        files.push(originalManifest[key].file);
        originalManifest[key].css && files.push(...originalManifest[key].css);
      } else {
        originalManifest[key].imports.forEach((item) => {
          getAllImports(item, files);
        });
        files.push(originalManifest[key].file);
        originalManifest[key].css && files.push(...originalManifest[key].css);
      }
      return files.map((item) => {
        const relativePath = path.join(name, item);
        return `${env.VUE_APP_CDN_URL}${relativePath}`;
      });
    };
    // const filenames = pages.map((item) => item.filename);
    const templates = pages.map((page) => page.template);
    const templatesToChunkname = pages.reduce((acc, cur) => {
      acc[cur.template] = cur.name;
      return acc;
    }, {});
    // console.log("aloha", templates, templatesToChunkname);
    // const templatesToChunkname = pages.reduce((acc, cur) => {
    //   acc[cur.filename] = cur.name;
    //   return acc;
    // }, {});
    const newManifest = templates.reduce((acc, cur) => {
      const fileList = [...uniq(getAllImports(cur))];
      acc[templatesToChunkname[cur]] = fileList;
      return acc;
    }, {});
    const workspace = process.cwd();
    const filePath = path.resolve(workspace, outputPath, manifest);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }
    await fs.promises.writeFile(filePath, stringify(newManifest, { space: 2 }));
  }
});

module.exports = rewriteManifest;
