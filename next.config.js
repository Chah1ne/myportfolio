// next.config.js
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },
  basePath: isProd ? '/myportfolio' : '', // Ensure this matches your deployment path
  assetPrefix: isProd ? '/myportfolio/' : '', // Ensure this matches your deployment path
  output: 'export', // Static export configuration
  distDir: 'out', // Output directory for static files
};
