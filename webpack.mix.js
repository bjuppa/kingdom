let mix = require('laravel-mix');

mix.setPublicPath('public/');

mix.sass('resources/sass/L1.scss', 'kingdom-L1.css');
mix.sass('resources/sass/L2.scss', 'kingdom-L2.css');
mix.sass('resources/sass/L3.scss', 'kingdom-L3.css');
mix.sass('resources/sass/L4.scss', 'kingdom-L4.css');

for (let i = 1; i <= 4; i++) {
  mix.combine(
    [
      'resources/html/html-begin.html',
      'resources/html/head-begin.html',
      'resources/html/demo/L' + i + '-head.html',
      'resources/html/head-end.html',
      'resources/html/demo/body-example.html',
      'resources/html/html-end.html'
    ],
    'public/demo-L' + i + '.html'
  );
}

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
