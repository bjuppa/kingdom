<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Breakpoints
    </h1>
    <p>
      The breakpoints module keeps Sass maps of named breakpoints and provides some mixins to apply them.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_breakpoints.scss"
                           target="_blank"><code>src/modules/_breakpoints.scss</code></a>.
    </p>
    <p>
      If you want more than just mixins, consider importing the
      <reload-link to="/extensions/breakpoints">breakpoints extension</reload-link>.
    </p>
    <h2>Device breakpoints</h2>
    <p>
      The device breakpoints are inspired by David Gilbertson's somewhat controversial article
      <a href="https://medium.freecodecamp.com/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862"
         target="_blank">The 100% correct way to do CSS breakpoints</a>
      and has mixins to use them:
    </p>
    <ul>
      <li><code>for-phone-only</code></li>
      <li><code>for-tablet-portrait-up</code></li>
      <li><code>for-tablet-landscape-up</code></li>
      <li><code>for-desktop-up</code></li>
      <li><code>for-big-desktop-up</code></li>
    </ul>
    <p class="current-device-breakpoint">
      Current device breakpoint:
    </p>

    <h2>Other named breakpoins</h2>
    <p>
      The function <code>get-breakpoint</code> will find a breakpoint value from the <var>$device-breakpoins</var>
      and <var>$named-breakpoints</var> Sass maps combined.
      You can use the function in your own media queries.
    </p>
    <p>
      Configure your own breakpoints by setting the Sass maps before importing the module.
      Some (most?) of you won't like the device breakpoints, and if so you can add your own
      "small"/"medium"/"large"/etc breakpoints to <var>$named-breakpoints</var>.
    </p>
    <p>
      Some breakpoints will be automatically registered if the Sass variables they depend on have been set by other
      modules:
    </p>
    <ul>
      <li><code>readable-line-length-min</code></li>
      <li><code>eadable-line-length-max</code></li>
      <li><code>two-columns</code></li>
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

  /* Demo classes using breakpoint mixins */

  .current-device-breakpoint::after {
    content: 'n/a';
    @extend %font-monospace;

    @include for-phone-only {
      content: 'phone';
    }
    @include for-tablet-portrait-up {
      content: 'tablet-portrait';
    }
    @include for-tablet-landscape-up {
      content: 'tablet-landscape';
    }
    @include for-desktop-up {
      content: 'desktop';
    }
    @include for-big-desktop-up {
      content: 'big-desktop';
    }
  }
</style>
