<template>
  <main class="space-inside">
    <h1>
      <small>Utilities:</small>
      Rounding
    </h1>
    <p>
      Element corners can be rounded using utilities from
      <a href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/_rounding.scss"
        target="_blank"><code>src/utilities/_rounding.scss</code></a>.
    </p>

    <aside class="flex children:mt-1 children:space-horizontally w-readable text-center children:space-inside">
      <div class="rounded-sm background-color-gray-100 py-1">
        Small rounded corners with class <code>rounded-sm</code>
      </div>
      <div class="rounded background-color-gray-100 py-1">
        Medium rounded corners with class <code>rounded</code>
      </div>
      <div class="rounded-lg background-color-gray-100 py-1">
        Large rounded corners with class <code>rounded-lg</code>
      </div>
    </aside>

    <aside class="flex children:mt-1 children:space-horizontally w-readable text-center align-items-center justify-content-space-around ">
      <div class="rounded-1 background-color-gray-100 py-1 space-inside visualize-vertical-rhythm">
        Line-high radius with class <code>rounded-1</code>
      </div>
      <code class="rounded-full block h-4 w-4 flex-no-shrink background-color-gray-100 flex align-items-center">
        rounded-full
      </code>
      <code class="rounded-full block flex-no-shrink pt-1/2 px-1/2 background-color-gray-100">
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
