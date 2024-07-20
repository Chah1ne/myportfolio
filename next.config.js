const path = require('path')
 
module.exports = {
  output: "export",
  distDir: "docs",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ["https://chah1ne.github.io/myportfolio/"],
    path: "/",
    unoptimized: true,
  },
}