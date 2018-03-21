// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerConfig = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/kingdom/'
  }
} : {};

module.exports = {
  srcDir: 'nuxt',
  generate: {
    dir: 'docs',
    minify: false,
  },
  ...routerConfig,
  head: {
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    title: 'Kingdom CSS'
  },
  build: {
    cssSourceMap: true,
    extractCSS: true,
    /*
    extend (config, { isDev, isClient, isServer }) {
      //const util = require('util');
      //console.log(util.inspect(config, {showHidden: false, depth: 2}))
    }
    */
  }
};
