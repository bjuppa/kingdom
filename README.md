# Kingdom

A CSS framework for consistent sizing, spacing and typography.

Please see [the full documentation for demos and details](https://bjuppa.github.io/kingdom/).

## Installation via npm

```bash
npm install kingdom-css
```

## Usage in Sass

Import the stuff you want, just make sure the paths are right for your own file structure:

```scss
/* Example of Kingdom CSS usage */

// 1: Set your variables first
// For this example we have just picked a primary color:
$colors: (primary: rgb(71, 40, 43));

// 2: Import the level of Kingdom you want:
@import "../node_modules/kingdom-css/src/L3-rhythm";

// 3: Optionally import the Kingdom utility classes you want:
@import "../node_modules/kingdom-css/src/utilities/spacing";
@import "../node_modules/kingdom-css/src/utilities/sizing";
// ...

// 4: Optionally import any Kingdom extensions you want:
@import "../node_modules/kingdom-css/src/extensions/forms";
// ...

/* Done! Now complete the masterpiece with your own Sass! */

// You may extend the placeholders Kingdom provides,
// as well as any mixins or functions from Kingdom's modules.

// Here's a quick example of a card component you could write:
.my-card {
  @extend %border;
  @include space-inside();
}
// ...
```
