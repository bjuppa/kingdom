<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Colors
    </h1>
    <p>
      The purpose of the colors module is to keep track of combinations of appropriate background and text colors.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_colors.scss"
                           target="_blank"><code>src/modules/_colors.scss</code></a>.
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
      a <code>body</code> background color together with a color for body text,
      and finally <code>link</code> and <code>visited</code> link colors&mdash;which are both text colors by themselves so
      they don't have any counterparts.
    </p>
    <div>
      <pre><code class="language-scss">$colors: (
  primary: #47282b #eee8e9,
  body: #fdfdfd #0c0d0c,
  link: #061386,
  visited: #061386
)
</code></pre>
    </div>

    <p>
      Every part of Kingdom that needs some color will generate and register that color unless it's already set in the
      <var>$colors</var> Sass-map.
    </p>
    <div class="w-readable">
      A good example is the <reload-link to="/level-1-reset">CSS reset</reload-link>, that through
      <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_colors-register-defaults.scss"
         target="_blank"><code>src/modules/_colors-register-defaults.scss</code></a>
      will register
      <ul class="list-comma-separated">
        <li><code>primary</code></li>
        <li><code>body</code></li>
        <li><code>link</code></li>
        <li><code>visited</code></li>
        <li><code>border</code></li>
        <li><code>caution</code></li>
        <li><code>disabled</code></li>
      </ul>
      colors unless already defined.
    </div>
    <p>
      Above your import of your selected Kingdom level, make sure to set the <var>$colors</var> Sass-map with any colors
      that you care about.
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
