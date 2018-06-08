<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Spacing
    </h1>
    <p>
      The spacing module contains mixins for adding space within and between elements.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_spacing.scss"
                           target="_blank"><code>src/modules/_spacing.scss</code></a>.
    </p>

    <p>
      The <code>space-inside</code> mixin adds some horizontal padding and some bottom padding if the element is
      baseline-shifted by Level 4.
      This mixin is great for bordered or card-like components where you don't want textual or other content to go right
      up against the border.
      Optional parameters to this mixin are <var>$sides</var> that can set the spacing on just the selected sides, and
      <var>$suffix</var> that can be used to pick other sized padding placeholders than the default.
    </p>

    <p>
      The <code>space-children-horizontally</code> mixin adds right margins to all but the last item.
      Great for inline lists.
      Optional parameter to this mixin is <var>$suffix</var> that can be used to pick other sized margin placeholder
      than the default.
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
