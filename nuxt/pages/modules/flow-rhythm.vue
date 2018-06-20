<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Flow Rhythm
    </h1>
    <p>
      This module provides functions and mixins for keeping the vertical rhythm.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_flow-rhythm.scss"
                           target="_blank"><code>src/modules/_flow-rhythm.scss</code></a>.
    </p>

    <h2>Calculating line and font-sizes</h2>
    <p>
      The <code>flow-lines</code> function returns the number of "lines" needed to fit a given vertical size.
    </p>
    <p>
      The <code>flow-font-size</code> function calculates a font size from a number of lines to cover and the desired
      relative line height.
    </p>
    <p>
      The <code>flow-line-height</code> function returns an absolute line-height that fits a given <var>$font-size</var>
      into the vertical rhythm, while avoiding lines being too tight using parameter <var>$min-line-height-factor</var>.
    </p>

    <h2>Responsive sizing with rhythm</h2>
    <p>
      The usual way to set a height responsively using viewport relative units would break a vertical rhythm as
      heights are no longer discrete multiples of the vertical rhythm base.
      The <code>responsive-rhythm</code> mixin can help creating multiple breakpoints that gradually increase a length
      property from a <var>$start-multiple</var> to an <code>$end-multiple</code> in discrete steps.
    </p>
    <aside class="responsive-height-3-10-lines background-color-gray-300">
      Example going from <code>3</code> to <code>10</code> lines
      between <code>600px</code> and <code>1800px</code> viewport width.
    </aside>

    <h2>Customizing the rhythm</h2>
    <p>
      At the top of the module's file there are default Sass variables setting the vertical rhythm base unit, as well as
      the desired line height span between body text and headings.
      These in turn are used to calculate <var>$font-size-normal</var>, but that variable can be overridden too.
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

  .responsive-height-3-10-lines {
    @include responsive-rhythm(3,10);
  }
</style>
