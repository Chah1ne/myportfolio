const path = require('path');

module.exports = {
  output: "export",
  distDir: "docs",
  basePath: '/myportfolio',  // Set this to your GitHub repository name
  assetPrefix: '/myportfolio',  // Set this to your GitHub repository name
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ["https://chah1ne.github.io"],
    path: "/myportfolio/_next/image",
    loader: 'default',
    unoptimized: true,
  },
};
