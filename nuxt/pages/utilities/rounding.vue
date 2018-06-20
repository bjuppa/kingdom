<template>
  <main class="space-inside">
    <h1>
      <small>Utilities:</small>
      Rounding
    </h1>
    <p>
      Coming soon
    </p>

    <aside class="flex flex-basis-min-content mt-1-children space-children-horizontally w-readable text-center">
      <div class="rounded-sm background-color-gray-300 space-inside">
        Small rounded corners with class <code>rounded-sm</code>
      </div>
      <div class="rounded background-color-gray-300 space-inside">
        Medium rounded corners with class <code>rounded</code>
      </div>
      <div class="rounded-lg background-color-gray-300 space-inside">
        Large rounded corners with class <code>rounded-lg</code>
      </div>
      <div class="rounded-1 background-color-gray-300 p-1 visualize-vertical-rhythm">
        Line-high rounded corners with class <code>rounded-1</code>
      </div>
    </aside>

    <aside class="flex mt-1-children space-children-horizontally align-items-center justify-content-space-around w-readable">
      <code class="rounded-full block h-4 w-4 background-color-gray-300 flex text-center align-items-center">
        rounded-full
      </code>
      <code class="rounded-full block pt-1/2 px-1 background-color-gray-300">
        rounded-full
      </code>
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
