<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Module:</small>
      Element Types
    </h1>
    <p>
      This module handles lists of
      <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories"
         target="_blank">element types</a>
      and some mixins to apply properties to those groups of elements.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_element-types.scss"
                           target="_blank"><code>src/modules/_element-types.scss</code></a>.
    </p>

    <h2>Lists of elements</h2>
    <ul class="children:w-readable">
      <li>
        <var>$html-block-elements</var> are elements that are set to <code>display: block;</code> by default.
      </li>
      <li>
        <var>$html-text-block-elements</var> are block elements that usually contain just phrasing content,
         like headings and paragraphs, or some kind of list items.
      </li>
      <li>
        <var>$html-inline-block-elements</var> are phrasing content elements that usually go as inline-blocks,
        like images, buttons, and form inputs.
      </li>
      <li>
        <var>$html-inline-elements</var> are all the ususal inline-elements.
      </li>
    </ul>

    <h2>Mixins</h2>
    <p>
      These mixins apply properties to a group of elements, but also have optional parameters to
      exclude (<var>$except</var>) and include (<var>$including</var>) lists of elements at call time:
    </p>
    <ul>
      <li><code>block-level-elements</code></li>
      <li><code>inline-block-elements</code></li>
      <li><code>inline-elements</code></li>
    </ul>

    <h2>Customizing element types</h2>
    <p>
      At the top of the module file you'll find Sass lists containing the default elements of each category.
      Should you need to, you may overide those lists before importing the module.
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
