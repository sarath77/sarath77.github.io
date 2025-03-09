
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-website/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 786, hash: '8e509b718b7ec86426c4921e300c942434168a44d2aa350b2f4ee3178aae6758', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1104, hash: 'aade54a0b42ae9eb4f6bf6a3e98b945b3608f75cbfc5db7991646906df9f9af9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U25NBIGL.css': {size: 347, hash: 'HIFGqdfxbxk', text: () => import('./assets-chunks/styles-U25NBIGL_css.mjs').then(m => m.default)}
  },
};
