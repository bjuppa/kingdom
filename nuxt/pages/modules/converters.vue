<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Converters
    </h1>
    <p>
      This module is a collection of functions for converting values between different CSS units.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_converters.scss"
                           target="_blank"><code>src/modules/_converters.scss</code></a>.
    </p>

    <ul class="w-readable-children">
      <li>
        Function <code>length-rem</code> converts any length unit to an approximate equivalent in <code>rem</code>.
      </li>
      <li>
        Function <code>font-size-rem</code> converts any font-size to an approximate equivalent in <code>rem</code>,
        even from named font-sizes like <code>x-small</code> and <code>larger</code>,
        as well as relative values in percentage and decimals.
      </li>
      <li>
        Function <code>font-size-px</code> converts any font-size to an approximate equivalent in <code>px</code>.
      </li>
      <li>
        Function <code>font-size-em</code> converts any font-size to an approximate equivalent in <code>em</code>.
      </li>
    </ul>

    <h2>Want better convertion rates?</h2>
    <p>
      It shouldn't be needed, but you can set your own convertion ratios before importing the module.
      Check out the Sass variables at the top of the module file for options!
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
