<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Module:</small>
      Clearfix
    </h1>
    <p>
      The clearfix module contains a <code>clearfix</code> mixin that makes an element contain its floated content
      without overflowing.
      From <a href="https://css-tricks.com/snippets/css/clear-fix/" target="_blank">Chris Coyier's article</a>,
      you'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_clearfix.scss"
                           target="_blank"><code>src/modules/_clearfix.scss</code></a>.
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
