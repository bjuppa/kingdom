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
    postcss: {
      plugins: {
        // Customize `postcss-cssnext` default options
        'postcss-cssnext': {
          features: {
            // Even with preserve set to true, the custom properties plugin adds a lot of duplication (that is removed by minification)
            // As we have minification turned off, we'll also keep custom properties off
            customProperties: false,
          }
        }
      }
    },
    extend (config) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader');
      Object.values(vueLoader.options.loaders).map((loader) => {
        if (loader instanceof Array) {
          loader.map((loader) => {
            if (loader.options.minimize === true) {
              loader.options.minimize = false;
            }
          });
        }
      });
    }
  }
};
