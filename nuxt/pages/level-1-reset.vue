<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Level&nbsp;1:</small>
      CSS Reset
    </h1>
    <p>
      The CSS reset in Kingdom is heavily inspired by other great projects like
      <a href="http://necolas.github.io/normalize.css/" target="_blank">Normalize</a>,
      <a href="http://tinyreset.surge.sh" target="_blank">Tinyreset</a>, and some parts from
      <a href="https://github.com/tailwindcss/tailwindcss/blob/master/css/preflight.css"
         target="_blank">Tailwind</a>.
      This documentation aims to cover the resets used in Kingdom that are somewhat unique or opinionated.
      If you seek to understand all the resets included, please look through the source of
      <a href="https://github.com/bjuppa/kingdom/blob/master/src/_L1-reset.scss"
         target="_blank"><code>src/_L1-reset.scss</code></a>,
      where comments and links explain most of the individual parts.
    </p>
    <p>
      This webpage is displayed with just Level&nbsp;1 and all utilities of Kingdom applied so you can quickly see its
      effects in your particular browser.
    </p>

    <h2>The <var>$colors</var> map</h2>
    <p>
      The reset utilises some basic colors.
      If not set beforehand in the <var>$colors</var> Sass-map, the reset will generate these colors
      automatically and register them with the Kingdom <reload-link to="/modules/colors">Colors module</reload-link>.
      Most of the colors have a matching text color to use on a colored background.
    </p>

    <ul class="children:w-readable">
      <li>
        <span class="background-color-primary space-inside">
        The <code>primary</code> color used as background, together with its corresponding text color.
        </span>
      </li>
      <li>
        The <code>body</code> background color along with its text color can be seen everywhere on this page,
        but of course also here on this unstyled element.
      </li>
      <li>The
        <reload-link to="" append class="color-link"><code>link</code> color</reload-link>
        on the body background.
      </li>
      <li>The
        <reload-link to="" append class="color-visited"><code>visited</code> link color</reload-link>
        on the body background.
      </li>
      <li>
        <div class="border inline-block space-inside">
          The <code>border</code> color defaults to <code>currentColor</code>.
        </div>
      </li>
      <li>
        The <code class="color-caution">caution</code> color
        and its <span class="background-color-caution">text color</span>
        can be used for warnings and errors.
      </li>
      <li>
        The <code class="background-color-disabled">disabled</code> background & text colors can be used to indicate
        disabled elements.
      </li>
    </ul>

    <h3>Sans-serif font for bright text</h3>
    <p>
      If no <var>$body-font-stack</var> has been selected and the body text color is bright on a dark background,
      Kingdom will explicitly set the body text to a sans-serif font.
      This is to avoid user-agents' default serif font that can be hard to read whenever the background is darker than
      the text on top of it.
    </p>
    <p>
      In most cases you will have set both colors and fonts according to your specific design, so this effect will
      usually just be seen early in your projects before such decisions have been made.
    </p>

    <h2>Body padding</h2>
    <p>
      The Sass variable <var>$body-padding</var> defaults to <code>0</code> but you can set it to another padding
      declaration should you need it.
    </p>

    <h2>Boxes become their set size</h2>
    <p>
      To make any explicitly sized elements take up the specified space regardless of padding or borders,
      the <code>box-sizing</code> property of all elements is set to <code>border-box</code>.
      Read more about it in
      <a href="https://css-tricks.com/box-sizing/" target="_blank">this article on CSS-Tricks</a>.
    </p>
    <p style="max-width: 20em; border-right-width: 1em;">
      This paragraph is set to a maximum width and that width should include the border set on its side.
    </p>

    <h2>Add borders by setting a single property</h2>
    <p style="border-bottom-width: 1em">
      From <a href="https://tailwindcss.com/docs/border-width/" target="_blank">Tailwind</a> comes the nifty trick
      of setting explicit <code>border-style</code> and <code>border-color</code> on all block, inline-block, and table
      elements, while also defaulting the <code>border-width</code>&nbsp;to&nbsp;<code>0</code>.
      This makes it super convenient to just set the border width on any side of an element wherever a border is needed.
      This paragraph just has its <code>border-bottom-width</code> set&hellip; and voila!
    </p>

    <h2>Inline elements</h2>
    <p>
      All inline elements have their <code>line-height</code> reset to <code>0</code> to stop them affecting the block
      of text around them should they have a different size or font.
      For example, a <sub>subscript element</sub> or <code>&lt;code&gt;</code> usually mess up the line-height&mdash;and
      here they don't!
      If you ever find text that doesn't line-break properly after you converted it to a block level element,
      all you need to fix it is to explicitly set <code>line-height</code> to <code>inherit</code>.
    </p>

    <h2>Sass placeholders</h2>
    <p>
      The reset is also responsible for including all the Sass placeholders needed by Kingdom.
      Feel free to extend these placeholders whenever convenient in your own Sass.
      We use Sass placeholders to generate all kinds of extendable behaviour, but if they're not extended in any
      selector, they're also not present in the generated CSS.
      The placeholders generally have a CSS comment printed along with them, so you can find them all in your
      non-minified CSS.
    </p>

    <h2>Not enough?</h2>
    <p>
      As you can see on this page, the text is quite hard to follow when just the resets of Level&nbsp;1 are applied.
      This is mainly because the font-sizes and spacing between blocks like headlines and paragraphs has not been set,
      they're at your browser's defaults.
      This is where <reload-link to="level-2-sizing">Level&nbsp;2 can help apply some <em>spacing</em> and
      <em>sizing</em></reload-link>!
    </p>

  </main>
</template>

<style lang="scss">
  @import "~assets/_variables.scss";
  @import "~assets/L1.scss";
</style>
<script>
  import ReloadLink from '../components/reload-link';

  export default {
    components: { ReloadLink }
  };
</script>
