<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Utilities:</small>
      Borders
    </h1>
    <p>
      Borders can be added to block elements using border utility classes from
      <a href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/_borders.scss"
        target="_blank"><code>src/utilities/_borders.scss</code></a>.
    </p>
    <p>
      Combining borders with <code>space-inside</code> or <code>children:space-inside</code>
      from the <reload-link to="/utilities/spacing">spacing utilities</reload-link> is a good way to ensure a little bit of padding between
      text contents and the borders.
    </p>

    <figure class="w-readable mt-0 flex flex-wrap children:space-horizontally children:space-inside children:mt-1 justify-content-space-evenly">
      <div class="border">
        <code>border</code>
      </div>

      <div class="border-l">
        <code>border-l</code>
      </div>
      <div class="border-r">
        <code>border-r</code>
      </div>
      <div class="border-lr">
        <code>border-lr</code>
      </div>


      <div class="border-t">
        <code>border-t</code>
      </div>
      <div class="border-b">
        <code>border-b</code>
      </div>
      <div class="border-tb">
        <code>border-tb</code>
      </div>

      <div class="border-0 background-color-gray-100">
        Use <code>border-0</code> to remove borders
      </div>
      <div class="unborder background-color-gray-100">
        Use <code>unborder</code> to remove borders and any padding
      </div>

      <figcaption class="w-full text-center">Examples of the border utility classes</figcaption>
    </figure>

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
