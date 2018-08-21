<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Layout
    </h1>
    <p>
      The layout module provides mixins for setting the <code>display</code> property in combination with
      <code>line-height</code> and <code>vertical-alignment</code>.
      Setting them all makes working with the baseline rhythm easier.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_layout.scss"
                           target="_blank"><code>src/modules/_layout.scss</code></a>.
    </p>

    <ul class="children:w-readable">
      <li>
        Mixin <code>display-block</code> is for creating blocks and applies <code>line-height: inherit</code> by
        default.
        Inheriting the line height ensures that any inline element with <code>line-height: 0</code> that is converted to
        a block will display properly.
      </li>
      <li>
        Mixin <code>display-inline-block</code> is for creating inline blocks and it applies
        <code>line-height: inherit</code> just like the block mixin.
        It will also set <code>vertical-align: bottom</code> by default, and this is for making sure an inline block
        (that already handles it's own vertical sizing) doesn't break the vertical rhythm of its container.
        If the inline block had a differently sized font than the container, <code>vertical-align: baseline</code> would
        have shifted the parent element out of vertical rhythm.
      </li>
      <li>
        Mixin <code>display-inline</code> is for creating inline elements and it applies <code>line-height: 0</code> and
        <code>vertical-align: baseline</code> by default to make sure inline elements can have a differently sized font
        compared to their parents without affecting the parent's line-height.
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
