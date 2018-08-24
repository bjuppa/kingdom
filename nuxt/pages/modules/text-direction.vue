<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Module:</small>
      Text Direction
    </h1>
    <p>
      The text-direction module contains mixins to apply CSS to a specific text direction.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_text-direction.scss"
                           target="_blank"><code>src/modules/_text-direction.scss</code></a>.
    </p>
    <p>
      These mixins are for example used to build the <code>children:space-horizontally</code> class,
      that adds a left or right margin to children depending on the text-direction.
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
