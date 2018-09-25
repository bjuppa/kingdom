<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Module:</small>
      Overflow
    </h1>
    <p>
      The overflow module contains mixins <code>overflow-wrap</code> that helps breaking long words when neccessary,
      <code>word-break</code> that aggressively breaks any word at the container edge,
      and <code>ellipsis</code> that truncates overflow with &hellip;
    </p>
    <p>
      From <a href="https://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container/" target="_blank">Chris Coyier's article</a>,
      you'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_overflow.scss"
                           target="_blank"><code>src/modules/_overflow.scss</code></a>.
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
