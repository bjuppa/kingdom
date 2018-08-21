<template>
  <main class="space-inside paragraphs:w-readable">
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

    <h2>Caveats</h2>
    <p>
      As these mixins extend Sass placeholders from the global scope they can't be included within other scopes,
      like media-queries.
      However, if you're already doing media-queries, you probably have little use for these mixins in the component
      you're working on anyway (but you may be interested in using the spacing suffix variables directly).
    </p>

    <h2>Customizable Sass variables</h2>
    <p>
      At the top of the module file there are defaults for what placeholder suffix to use for utilities with
      <code>xs</code>, <code>s</code>, and <code>m</code> sized spaces.
      They map to fractions of the base spacing unit.
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
