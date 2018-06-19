<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Extension:</small>
      Breakpoints
    </h1>
    <p>
      The breakpoints extension sets the named breakpoints from the
      <reload-link to="/modules/breakpoints">Breakpoints module</reload-link>
      in CSS custom variables for reuse in javascript.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/extensions/_breakpoints.scss"
                           target="_blank"><code>src/extensions/_breakpoints.scss</code></a>.
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
  @import "../../../src/extensions/breakpoints.scss"
</style>
