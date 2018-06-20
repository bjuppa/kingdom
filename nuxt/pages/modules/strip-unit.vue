<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Strip Unit
    </h1>
    <p>
      This module contains a single Sass mixin called <code>strip-unit</code> that does just that.
      It strips the unit off a Sass variable.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_strip-unit.scss"
                           target="_blank"><code>src/modules/_strip-unit.scss</code></a>.
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
