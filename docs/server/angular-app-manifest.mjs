
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-website/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 782, hash: '6b8d9145fb9c36bdcdb43804d2e4b628175679d6cc6ef349974c32e44b6cf218', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1100, hash: '3023a703bc42651ecdc05dffcc6d5a3f2ebd851df8174b0df85368aab9ebd784', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U25NBIGL.css': {size: 347, hash: 'HIFGqdfxbxk', text: () => import('./assets-chunks/styles-U25NBIGL_css.mjs').then(m => m.default)}
  },
};
