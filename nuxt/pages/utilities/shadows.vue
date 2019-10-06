<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Utilities:</small>
      Shadows
    </h1>
    <p>
      Shadow utilities can be included from
      <a href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/_shadows.scss"
        target="_blank"><code>src/utilities/_shadows.scss</code></a>.
    </p>

    <aside class="mt-0 flex flex-wrap w-readable children:space-horizontally justify-content-space-between children:mt-1 children:space-inside">
      <div class="shadow"><code>shadow</code></div>
      <div class="shadow-inner"><code>shadow-inner</code></div>
      <div class="shadow-none"><code>shadow-none</code></div>

      <div class="shadow-1/4"><code>shadow-1/4</code></div>
      <div class="shadow-1/3"><code>shadow-1/3</code></div>
      <div class="shadow-1/2"><code>shadow-1/2</code></div>
      <div class="shadow-3/4"><code>shadow-3/4</code></div>
      <div class="shadow-1"><code>shadow-1</code></div>
      <div class="shadow-3/2"><code>shadow-3/2</code></div>
      <div class="shadow-2"><code>shadow-2</code></div>
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
