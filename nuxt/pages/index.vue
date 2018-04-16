<template>
  <main class="space-inside">
    <h1>Kingdom CSS</h1>
    <p>
      A CSS framework, written in <a href="http://sass-lang.com" target="_blank">Sass</a>,
      for consistent spacing, sizing and typography.
    <p>
    <p>
      <kbd>npm install kingdom-css</kbd>
    </p>
    <p>
      Import the stuff you want into your main Sass file&mdash;just make sure the paths are right for your own file
      structure:
    </p>
    <div class="border-l space-inside">
      <pre><code class="language-scss">/* Example of Kingdom CSS usage */

// 1: Set your variables first, for example we have picked a primary color:
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


/* Then complete the masterpiece with your own Sass! */
// You may extend the placeholders Kingdom provides,
// and use any mixins or functions from Kingdom's modules.

// Here's a quick example of a card component you could write:
.my-card {
  @extend %border;
  @include set-space-inside();
}

// ...
</code></pre>
    </div>

    <blockquote class="text-4 border-l space-inside color-primary">
      <i>If content is king, context is the kingdom</i>
    </blockquote>

    <p>
      Kingdom CSS consists of four "levels" to choose from,
      where each level adds some functionality on top of the previous.
      After selecting a level by importing its file into your sass, there are some optional utilities and extensions
      available to include.
      Every import has default options, configurable with Sass variables.
    </p>

    <ol>
      <li>
        The <reload-link to="/level-1-reset"> 1st level is an opinionated <strong>CSS reset</strong> </reload-link>,
        laying a foundation for the other levels.
      </li>

      <li>
        The <reload-link to="/level-2-sizing">2nd level</reload-link> applies consistent <strong>spacing</strong>
        between blocks and a scale for <strong>sizing</strong> text elements.
      </li>

      <li>
        The <reload-link to="/level-3-rhythm">3rd level</reload-link> adds a <strong>vertical rhythm</strong>, helping
        blocks to line up across columns by keeping line heights consistent.
      </li>

      <li>
        The <reload-link to="/level-4-baseline">4th level</reload-link> makes every line of text go on a common
        <strong>baseline</strong>, making individual lines of text line up across columns, even if they're in different
        font sizes.
      </li>
    </ol>

    <p>
      This webpage is displayed using Level 3, with all utilities of Kingdom included.
      Only one configuration variable, the <span class="color-primary"><code>primary</code> color</span>, is set before
      the Kingdom level is included.
      Everything else is default, and additional colors are derived from the primary color.
    </p>

    <h2>Not for the faint of heart</h2>
    <p>
      Kingdom CSS embraces the cascade, is utility-first, has no namespacing,
      and does all kinds of other things that might seem scary and are sometimes even frowned upon.
      Not everyone will like it, and there are certainly situations where its not the best fit.
      But there is a thought behind it all, and I hope this documentation will eventually convey both the why and
      how of each realm within the Kingdom.
    </p>

    <h2>Testing</h2>
    <figure>
      <img src="~/assets/browserstack-logo-600x315.png" class="h-5" alt="Browserstack logo">
      <figcaption>
        We're using <a href="http://browserstack.com/" target="browserstack">Browserstack</a> for testing across web
        browsers, please check out their amazing services!
      </figcaption>
    </figure>

    <h2>Demos</h2>
    <p>
      The demo pages are set up with no options at all, meaning they even generate a random primary color.

      To see an example of all four levels of Kingdom side by side, you can visit
      <reload-link to="/demo" target="basic-demo">the demo page</reload-link>.

      The form extension can be seen in action on
      <reload-link to="/forms-demo" target="forms-demo">the forms demo page</reload-link>.
    </p>

  </main>
</template>

<script>
  import ReloadLink from '~/components/reload-link.vue';

  export default {
    components: {
      'reload-link': ReloadLink
    }
  };
</script>

<style lang="scss">
  @import "~assets/_variables.scss";
  @import "~assets/L3.scss";
</style>
