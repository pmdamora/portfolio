/* eslint-disable @typescript-eslint/no-var-requires */
const withTypescript = require('@zeit/next-typescript');
const path = require('path');

module.exports = withTypescript({
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@portfolio'] = path.join(__dirname, './');
    return config;
  }
});
