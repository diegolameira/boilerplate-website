require('dotenv').config();

const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const path = require('path');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, `_${process.env.NODE_ENV}.env`),
        systemvars: true
      }),
      new Dotenv({
        path: path.join(__dirname, `_.env`),
        systemvars: true
      })
    ];

    return config;
  }
};

module.exports = withBundleAnalyzer(nextConfig);
