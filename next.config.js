/* eslint-disable @typescript-eslint/no-var-requires */
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(withSass());
