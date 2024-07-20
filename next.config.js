const path = require('path');

module.exports = {
  output: "export",
  distDir: "docs",
  basePath: '/myportfolio',  // Set this to the repository name
  assetPrefix: '/myportfolio/',  // Set this to the repository name
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
};
