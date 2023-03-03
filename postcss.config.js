const purgeCss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgeCss({
      content: ["./src/**/*.vue", "./src/**/*.js"],
      skippedContentGlobs: ["node_modules/**"],
      safelist: [
        /(^animate-|^leaflet|^vue-slider|^form-element-tag|^swipeout|^ql-)/
      ]
    })
  ]
};
