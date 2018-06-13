<template>
  <main class="space-inside visualize-vertical-rhythm">
    <h1>
      <small>Layout utilities:</small>
      Columns
    </h1>

    <div class="columns-readable breaks-readable avoid-break-inside-children">
      <p>
        In supporting browsers, CSS column layouts can be created using the utility classes from
        <a href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/layout/_columns.scss"
           target="_blank"><code>src/utilities/layout/_columns.scss</code></a>.
      </p>
      <p>
        Most of the column utility classes are wrapped in supports-clauses to make sure columns
        are not applied in browsers supporting some but not all the column properties required for a good user
        experience.
      </p>
      <p>
        This block has class <code>columns-readable</code> applied, making it add columns of a minimum readable
        line-length, as long as there is available horizontal space.
        In browsers not supporting columns, the block will have a fallback applying a readable max-width.
      </p>
      <p>
        This block also has class <code>breaks-readable</code> from the <reload-link to="breaks">breaks
        utilities</reload-link> which set the number of orphan lines roughly matching the minimum line-length.
        It's useful in situations where the contents would otherwise be split up in many very short columns because of
        the available width.
        The effect is that any paragraph shorter than the column is wide will not break over two columns.
      </p>
    </div>

    <div class="columns-readable-horizontal-scroll">
      <div class="columns-readable-horizontal">
        <h2>Going horizontal</h2>
        <p>
          This block has class <code>columns-readable-horizontal</code> applied, which keeps the column height
          comfortably within the viewport, but only when the viewport is wide enought for at least two columns of text.
        </p>
        <p>
          Around it is a wrapper with class <code>columns-readable-horizontal-scroll</code> that adds horizontal
          scrolling and makes the content slightly larger than its container to hint there is more content.
          If you don't want that hint you may just add utility class <code>overflow-x-scroll</code> instead.
          This horizontal columns with scroll works best on full width wrappers.
        </p>
        <p>
          To see the effect you may need to make your browser window narrower, until the
          <reload-link to="#last-paragraph" relative>last paragraph</reload-link> disappears.
        </p>

        <h3>And now, 10 paragraphs of Lorem ipsum&hellip;</h3>
        <p v-for="item in 10" class="italic color-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <h3 id="last-paragraph" class="avoid-break-after">&hellip;and finally&hellip;</h3>
        <p>This is the last paragraph.</p>
      </div>
    </div>

    <h2>Limitations with columns</h2>
    <ul class="columns-readable avoid-break-inside-children column-gap-2">
      <li>
        Browser support for the break and column properties is far from complete.
      </li>
      <li>
        Safari has trouble with top margins between items at breaks between columns,
        sometimes leaving a gap before the first item in a column.
      </li>
      <li>
        Some browsers have trouble with markers on list items in columns, unless the column-gap is wider.
      </li>
      <li>
        Columns doesn't work well with <reload-link to="/level-4-baseline">Level&nbsp;4</reload-link> as descenders from
        the last line of each column may be cut off and displayed at the top of the next column, or the collapsing of
        margins at breaks may shift the next element after the columns out of the vertical rhythm.
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
