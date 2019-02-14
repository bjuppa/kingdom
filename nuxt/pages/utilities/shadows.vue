<template>
  <main class="space-inside">
    <h1>
      <small>Utilities:</small>
      Shadows
    </h1>
    <p>
      Coming soon
    </p>

    <aside class="flex flex-wrap children:space-horizontally justify-content-space-around children:mt-1 children:space-inside">
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
