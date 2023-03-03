function envScss(env) {
  return Object.keys(env)
    .map((x) => `$${x}: "${env[x]}";\n`)
    .join("");
}

module.exports = envScss;
