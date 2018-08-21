<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Module:</small>
      Sizing
    </h1>
    <p>
      The sizing module contains mixins for working with length related CSS properties.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_sizing.scss"
                           target="_blank"><code>src/modules/_sizing.scss</code></a>.
    </p>

    <h2>Setting general sizes</h2>
    <p>
      The <code>set-length</code> mixin is for setting length properties in relation to <var>$spacing-base</var>.
      When used it will declare the CSS properties but also use CSS calc and the <var>--spacing-base</var> custom
      property whenever available to make the spacing base changeable client-side.
    </p>

    <h2>Text sizing</h2>
    <p>
      The <code>set-text</code> mixin applies <code>font-size</code> and <code>line-height</code>.
      If the desired line-height can be related to the <var>$spacing-base</var> it will also be applied with CSS calc,
      as well as the <var>--line-height</var> custom property that can be used for other nifty calculations
      (e.g.&nbsp;baseline shift in <reload-link to="/level-4-baseline">Level&nbsp;4</reload-link>).
    </p>

    <h2>Measure (line lengths)</h2>
    <p>
      The <code>set-readable-max-width</code> mixin applies <code>max-width</code> from <var>$readable-line-length</var>
      (default&nbsp;<code>75ch</code>).
    </p>

    <h2>Customizable Sass variables</h2>
    <ul class="children:w-readable">
      <li><var>$spacing-base</var> is usually set by the main Kingdom level file</li>
      <li><var>$readable-line-length-min</var> defaults to <code>45ch</code></li>
      <li><var>$readable-line-length-max</var> defaults to <code>75ch</code></li>
    </ul>
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
