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
    }
  },
  build: {
    cssSourceMap: false,
    html: {
      minify: false
    },
    postcss: {
      preset: {
        features: {
          "dir-pseudo-class": false
        }
      },
      plugins: {
        cssnano: false
      }
    }
  }
};
