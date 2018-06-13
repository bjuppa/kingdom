<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Borders
    </h1>
    <p>
      The borders module helps adding borders to elements using the width property,
      while at the same time preventing contents from being pushed out of the vertical rhythm.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_borders.scss"
                           target="_blank"><code>src/modules/_borders.scss</code></a>.
    </p>

    <h2>Reset borders first</h2>
    <p>
      It all works by first resetting borders to a default style and color, but with a width of <code>0</code>.
      Then borders can easily be applied by just setting <code>border-width</code> on appropriate sides of an element.
      This idea came from <a href="https://tailwindcss.com/docs/border-width/" target="_blank">Tailwind</a> and this
      module does just that through mixin <code>border-reset</code>.
    </p>

    <h2>Keeping the vertical rhythm</h2>
    <p>
      In Kingdom's <reload-link to="/level-3-rhythm">3rd level</reload-link> and up it's important that elements'
      heights are multiples of the spacing base and this module has mixins for taking care of that.
      The mixins also use CSS custom properties for the border widths so that calculations can be made with javascript
      and in other CSS selectors.
    </p>

    <ul class="w-readable-children">
      <li>
        Mixin <code>border-for-fixed-height</code> puts borders on the specified sides of fixed height elements.
        There's no need to shift fixed height elements as long as <code>box-sizing: border-box;</code> and the borders
        are already included in the height.
      </li>
      <li>
        For elements that have their height automatically set, it's usually affected by the line-height and number of
        lines within the element.
        Mixin <code>border-for-auto-height</code> will shift the element upwards using relative positioning to
        compensate for the space added by a top border.
        It will also apply a negative bottom margin to compensate for the space added by a bottom border.
      </li>
      <li>
        For bordered elements that are supposed to be one line only (e.g. form inputs) there's the mixin
        <code>border-preserving-line-height</code>.
        It will reduce the line-height to compensate for top and bottom borders, keeping the element's original height.
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
