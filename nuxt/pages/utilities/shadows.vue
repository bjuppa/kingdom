<template>
  <main class="space-inside">
    <h1>
      <small>Utilities:</small>
      Shadows
    </h1>
    <p>
      Coming soon
    </p>

    <aside class="flex flex-wrap space-children-horizontally justify-content-space-around mt-1-children">
      <div class="shadow"><code>shadow</code></div>
      <div class="shadow-md"><code>shadow-md</code></div>
      <div class="shadow-lg"><code>shadow-lg</code></div>
      <div class="shadow-inner"><code>shadow-inner</code></div>
      <div class="shadow-none"><code>shadow-none</code></div>
    </aside>
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
