let mix = require('laravel-mix');

mix.setPublicPath('public/');

mix.sass('sass/_L1-reset.scss', 'L1-kingdom.css');

mix.combine(
  [
    'resources/html/html-begin.html',
    'resources/html/head-begin.html',
    'resources/html/demo/L1-head.html',
    'resources/html/head-end.html',
    'resources/html/demo/body-example.html',
    'resources/html/html-end.html'
  ],
  'public/L1-demo.html'
);

mix.combine(
  [
    'resources/html/html-begin.html',
    'resources/html/head-begin.html',
    'resources/html/demo/head.html',
    'resources/html/head-end.html',
    'resources/html/demo/body.html',
    'resources/html/html-end.html'
  ],
  'public/demo.html'
);
