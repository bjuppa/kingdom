<template>
  <main class="space-inside">
    <h1>
      <small>Utilities:</small>
      Rounding
    </h1>
    <p>
      Coming soon
    </p>

    <aside class="flex mt-1-children space-children-horizontally w-readable">
      <div class="rounded-sm background-color-gray-300 space-inside">
        Small rounded corners with class <code>rounded-sm</code>
      </div>
      <div class="rounded background-color-gray-300 space-inside">
        Medium rounded corners with class <code>rounded</code>
      </div>
      <div class="rounded-lg background-color-gray-300 space-inside">
        Large rounded corners with class <code>rounded-lg</code>
      </div>
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
