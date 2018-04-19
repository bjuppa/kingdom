<template>
  <main class="space-inside">
    <h1>
      <small>Module:</small>
      Colors
    </h1>
    <p>
      The purpose of the colors module is to keep track of combinations of appropriate background and text colors.
    </p>
    <p>
      All colors should be registered in the global Sass-map named <var>$colors</var>.
      For every key in the <var>$colors</var> map, there should be a Sass-list containing one or more color values.
      The first color value of such a list is the color named by the key.
      There may be a second color in the list, if so it's a text color to be used on top of a background in the named
      color.
    </p>

    <p>
      In the following example there is a <code>primary</code> color along with a corresponding text color,
      the <code>body</code> background color together with the body text color,
      and finally a link color, which is a text color by itself so it doesn't have a corresponding text color.
    </p>
    <div class="language-sass">
      <pre><code class="language-scss">
$colors: (
  primary: #47282b #eee8e9,
  body: #fdfdfd #0c0d0c,
  link: #061386
)
</code></pre>
    </div>

    <p>
      Every part of Kingdom that needs some color will generate and register that color unless it's already set in the
      <var>$colors</var> Sass-map.
      A good example is the <reload-link to="/level-1-reset">CSS reset</reload-link>, that will register
      <code>primary</code>, <code>body</code>, and <code>link</code> colors unless already defined.
    </p>
    <p>
      Above your import of the Kingdom level, make sure to set the <var>$colors</var> Sass-map with any colors that
      you care about.
    </p>
    <p>
      You can check what colors are registered with
      <code class="language-sass">@debug $colors;</code>
      anywhere in your Sass.
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
