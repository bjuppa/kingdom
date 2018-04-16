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
      For every key in the <var>$colors</var> map, there is a Sass-list containing one or more color values.
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
      <pre><code class="language-scss">// Example of $colors map
(
  primary: #47282b #eee8e9,
  body: #fdfdfd #0c0d0c,
  link: #061386
)
</code></pre>
    </div>

    <p>

    </p>
  </main>
</template>

<style lang="scss">
  @import "~assets/_variables.scss";
  @import "~assets/L3.scss";
</style>
