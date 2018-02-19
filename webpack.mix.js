let mix = require('laravel-mix');

mix.setPublicPath('public/');

for (let i = 1; i <= 4; i++) {
  mix.sass('resources/sass/L' + i + '.scss', 'kingdom-L' + i + '.css');
  mix.sass('resources/sass/forms-L' + i + '.scss', 'kingdom-forms-L' + i + '.css');

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

  mix.combine(
    [
      'resources/html/html-begin.html',
      'resources/html/head-begin.html',
      'resources/html/demo/forms/L' + i + '-head.html',
      'resources/html/head-end.html',
      'resources/html/demo/forms/body-example.html',
      'resources/html/html-end.html'
    ],
    'public/forms-demo-L' + i + '.html'
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

mix.combine(
  [
    'resources/html/html-begin.html',
    'resources/html/head-begin.html',
    'resources/html/demo/head.html',
    'resources/html/head-end.html',
    'resources/html/demo/forms/body.html',
    'resources/html/html-end.html'
  ],
  'public/forms-demo.html'
);
