/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

export default {
  title: 'Portfolio Components',
  codeSandbox: false,
  typescript: true,
  modifyBundlerConfig: config => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@portfolio'] = path.join(__dirname, './');
    return config;
  },
  wrapper: '@portfolio/components/Wrapper.tsx'
};
