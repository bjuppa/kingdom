// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/kingdom/'
  }
} : {};

module.exports = {
  srcDir: 'nuxt',
  generate: {
    dir: 'docs',
  },
  ...routerBase,
  head: {
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    title: 'Kingdom CSS'
  }
};
