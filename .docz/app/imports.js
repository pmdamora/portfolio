export const imports = {
  'components/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-index" */ 'components/index.mdx'),
  'components/Box/Box.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-box-box" */ 'components/Box/Box.mdx'),
}
