<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Module:</small>
      Extenders
    </h1>
    <p>
      The extenders module contains mixins to SASS-extend existing classes with prefixes and subselectors.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_extenders.scss"
                           target="_blank"><code>src/modules/_extenders.scss</code></a>.
    </p>
    <p>
      These mixins are for example used to generate <code>children:</code> prefixed classes
      that "extends" another class with the <code>> *</code> subselector.
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
