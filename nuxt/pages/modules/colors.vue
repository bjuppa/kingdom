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

    <h2>The global <var>$colors</var> map</h2>
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

    <h3>Registering colors in <var>$colors</var></h3>
    <p>
      Above your import of your selected Kingdom level, make sure to set the <var>$colors</var> Sass-map with any colors
      that you care about.
      You can also use the <code>register-color</code> mixin to which you supply a <var>$name</var>
      and a list of one or two <var>$color-values</var>,
      the second being the text color to use on a backround of the first color.
      If you only supply one color, the mixin will automatically generate a contrasting text color unless
      <var>$ensure-text-color</var> is set to <code>false</code>.
    </p>

    <h3>Debugging <var>$colors</var></h3>
    <p>
      You can check what colors are registered with
      <code class="language-sass">@debug $colors;</code>
      anywhere in your Sass.
    </p>

    <h2>Applying colors</h2>
    <p>
      The colors module provides two mixins for applying a named color within CSS selectors.
      Both pull color values from the <var>$colors</var> map and they both set properties referencing CSS custom
      properties, for those browsers that support them.
      Using the custom properties makes changing the colors dynamically easier, both via javascript and the CSS cascade.
    </p>
    <ul class="children:w-readable">
      <li>
        The mixin <code>apply-color</code> takes a color <var>$name</var> and an optional <var>$property</var> to
        set&mdash;which of course defaults to the <code>color</code> property when not supplied.
        If you want to apply not the named color itself, but its corresponding text color, just supply
        <code>$apply-text-color: true</code> as well.
      </li>
      <li>
        The mixin <code>apply-background-color</code> takes a color <var>$name</var> that it applies to the
        <code>background-color</code> property.
        But it also applies that background color's corresponding text color to the <code>color</code> property,
        unless <code>$apply-text-color: false</code> is supplied.
      </li>
    </ul>
    <h3>Getting a color value in Sass</h3>
    <p>
      If you need to pull out a color value from the <var>$colors</var> map, perhaps to transform it or apply it
      within a shadow declaration you can use function <code>get-color</code>.
    </p>

    <h2>Functions for generating and transforming colors</h2>
    <ul class="children:w-readable">
      <li>
        Function <code>transform-hue</code> returns a color with similar "feel" to the supplied color but shifted into
        the hue of another color.
        Basically it keeps the angles between hues in multiples of 30&deg;.
        For example the default <code class="color-link">link</code> color is the
        <code class="color-primary">primary</code> color shifted into the <span style="color: blue;">blue</span>
        spectrum.
      </li>
      <li>
        Function <code>ensure-hue-contrast</code> will compare a given color to another color and shift it away in the
        hue spectrum if they're within 15&deg; of each other.
        For example the default <code class="color-link">link</code> color is checked against the
        <code class="color-primary">primary</code> color that it's derieved from so that if they're both blue, they're
        at least different hues of blue.
      </li>
      <li>
        Function <code>transform-hue-with-contrast</code> combines the two above functions for convenience.
      </li>
      <li>
        Function <code>normalize-color</code> will adjust a color to a minimum saturation and so that its not to dark or
        too light.
        For example the default <code class="color-caution">caution</code> color is derieved from the
        <code class="color-primary">primary</code> color, but normalized so that it's not as extreme, should the primary
        color be that.
      </li>
      <li>
        Function <code>text-color-for-background</code> will generate a contrasting text color to use on a given
        background.
        Basically it reduces saturation and makes the text color dark if the background is light and vice versa.
      </li>
      <li>
        Function <code>background-text-color-pair</code> will append a corresponding text color to the given background
        color and return them as a list, suitable for insertion into the <var>$colors</var> map.
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
