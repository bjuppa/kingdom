<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Module:</small>
      Data Generators
    </h1>
    <p>
      This module provides mixins for generating data, mostly used in other modules and to generate placeholders.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_data-generators.scss"
                           target="_blank"><code>src/modules/_data-generators.scss</code></a>.
    </p>

    <h2>Making sure a map contains some whole numbers</h2>
    <p>
      Function <code>map-merge-natural-numbers</code> will return a Sass map with all natural (whole) numbers up to
      <var>$max</var> merged in.
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
