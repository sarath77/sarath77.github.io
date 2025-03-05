
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-website/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 782, hash: 'c253447c9e04f0b657f039c12769b0be4141637f7e84f20333b7bd34e0cdf6e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1100, hash: '0862b84c7f59ea62648d24009f5b8299b2a0d3757dc6d6a8a9ff30b176b21c74', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U25NBIGL.css': {size: 347, hash: 'HIFGqdfxbxk', text: () => import('./assets-chunks/styles-U25NBIGL_css.mjs').then(m => m.default)}
  },
};
