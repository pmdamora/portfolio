/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require('next-offline');
const withTypescript = require('@zeit/next-typescript');
const path = require('path');

const nextConfig = {
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@portfolio'] = path.join(__dirname, './');
    return config;
  },
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = withTypescript(withOffline(nextConfig));
