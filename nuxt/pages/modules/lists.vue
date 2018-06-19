<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Lists
    </h1>
    <p>
      A collection of mixins for display of <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_lists.scss"
                           target="_blank"><code>src/modules/_lists.scss</code></a>.
    </p>

    <ul class="w-readable-children mt-1-adjacent-children">
      <li>
        Mixin <code>list-unstyled</code> removes:
        <ul class="list-unstyled mt-0">
          <li>horizontal padding</li>
          <li>list markers</li>
        </ul>
      </li>
      <li>
        Mixin <code>list-inline</code> stacks list items horizontally as inline blocks,
        without affecting children's padding:
        <ul class="list-inline mt-0">
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </li>
      <li>
        Mixin <code>list-comma-separated</code> makes a list inline with separators between elements:
        <ul class="list-comma-separated">
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </li>
    </ul>
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
