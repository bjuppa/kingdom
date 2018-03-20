let mix = require('laravel-mix');

mix.setPublicPath('nuxt/static');

for (let i = 1; i <= 4; i++) {
  mix.sass('nuxt/assets/L' + i + '.scss', 'kingdom-L' + i + '.css');
  mix.sass('nuxt/assets/forms-L' + i + '.scss', 'kingdom-forms-L' + i + '.css');
}
