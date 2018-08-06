const withTypescript = require('@zeit/next-typescript');
const withManifest = require('next-manifest');
const withWorkbox = require('next-workbox');

module.exports = withTypescript(
  withWorkbox(
    withManifest({
      manifest: {
        icons: {
          src: './res/icon-512x512.png'
        }
      }
    })
  )
);
