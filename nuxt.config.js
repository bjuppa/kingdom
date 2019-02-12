module.exports = {
  srcDir: "nuxt",
  generate: {
    dir: "docs"
  },
  router: {
    base: process.env.DEPLOY_ENV === "GH_PAGES" ? "/kingdom/" : "/"
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    title: "Kingdom CSS",
    htmlAttrs: {
      lang: "en"
    },
    build: {
      cssSourceMap: true,
      optimizeCSS: false,
      html: {
        minify: false
      },
      optimization: {
        minimize: false
      },
      loaders: {
        scss: {
          outputStyle: "expanded"
        },
        sass: {
          outputStyle: "expanded"
        },
        vue: {
          minimize: false
        }
      }
    }
  }
};
