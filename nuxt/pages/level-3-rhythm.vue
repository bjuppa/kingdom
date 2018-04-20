<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Level 3:</small>
      Vertical Rhythm
    </h1>
    <p>
      To achieve a consistent vertical rhythm, where every line of text and every block line up nicely across columns,
      the height of every element should be a multiple of the same base.
      Kingdom's 3rd level helps you achieve this by carefully fitting font-sizes with line-heights that are such
      multiples.
    </p>
    <p>
      The absolute line-height of the body text will be equal to the vertical rhythm base, whereas the line-height
      of a larger heading element could be two multiples, or more, of the vertical rhythm base.
      Because blocks of text take up the height of all their lines combined, the block itself will also be a
      multiple of the vertical rhythm base.
    </p>
    <p>
      This webpage is displayed with Level 3 and all utilities of Kingdom applied so you can quickly see its
      effects in your particular browser.
    </p>

    <h2>Consistent text</h2>
    <p>
      Whereas <reload-link to="/level-2-sizing">the 2nd level of Kingdom</reload-link> generates font-sizes following a
      modular scale and relative line heights using a linear slope, the 3rd level will fill the <var>$font-sizes</var>
      and <var>$line-heights</var> Sass-lists with absolute line heights that are perfect multiples of a
      <var>$vertical-rhythm-base</var> and finding font-sizes that fit within the specified number of "lines".
      So no more modular scale in Level 3!
    </p>
    <p>
      Just as in Level 2, the defaults are derived from <var>$desired-body-font-size</var> (default <code>18px</code>),
      <var>$body-line-height-factor</var> (default <code>1.5</code>), and <var>$min-line-height-factor</var> (default
      <code>1.2</code>), but the calculations are quite different.
      In Level 3 the <var>$spacing-base</var> (that is passed to Level 2) is equal to the
      <var>$vertical-rhythm-base</var> which in turn is equal to the <var>$body-leading</var>.
    </p>
    <p>
      The body <em>leading</em>&mdash;line height&mdash;is the absolute length calculated from
      <var>$desired-body-font-size</var>&nbsp;&times;&nbsp;<var>$body-line-height-factor</var>
      converted to <code>rem</code>.
      With the default settings this calculated body leading becomes <code>1.6875rem</code>, but as with everything you
      are free to set it yourself!
      Either by setting <var>$body-leading</var> directly, or any of the other variables that affect the calculation.
    </p>
    <p>
      Using that body leading, Kingdom's 3rd level will then fill the <var>$font-sizes</var> and
      <var>$line-heights</var>, unless already set.
    </p>

    <aside>
      <ol class="visualize-vertical-rhythm">
        <li>
          <span class="text-1">Text 1</span> takes <strong>one line</strong> with a font-size appropriate for the
          <var>$body-line-height-factor</var>
        </li>
        <li>
          <span class="text-2">Text 2</span> takes <strong>one line</strong> with a font-size in the middle of text 1
          and
          text 3
        </li>
        <li>
          <span class="text-3">Text 3</span> takes <strong>one line</strong> with a font-size appropriate for the
          <var>$min-line-height-factor</var>
        </li>
        <li>
          <span class="text-4">Text 4</span> takes <strong>two lines</strong> with a font-size appropriate for the
          <var>$min-line-height-factor</var>
        </li>
        <li>
          <span class="text-5">Text 5</span> takes <strong>three lines</strong> with a font-size appropriate for the
          <var>$min-line-height-factor</var>
        </li>
        <li>
          <span class="text-6">Text 6</span> takes <strong>four lines</strong> with a font-size appropriate for the
          <var>$min-line-height-factor</var>
        </li>
      </ol>
    </aside>

    <h2>Elements that need special care to fit</h2>
    <p>
      Most elements will just fit right into the vertical rhythm when they inherit the <code>line-height</code>
      from their parents, but some need a little extra attention by Kingdom to fit in.
    </p>

    <h3>Borders</h3>
    <p>
      Whenever you add a top or bottom border to a block of text,
      its height will no longer be a multiple of the line-height.
      Kingdom's borders module provide mixins that help shifting the element slightly up using relative
      positioning, and applying appropriate negative margin in combination with the border.
    </p>
    <p>
      For most cases it's easiest to just extend your class with the border placeholders
      or use the border utility classes directly on your elements.
    </p>

    <h3>Thematic breaks</h3>
    <p>
      To make <code>&lt;hr&gt;</code> elements take up one full "line" in the vertical flow, Kingdom gives them a fixed
      height along with a negative <code>margin-bottom</code> of the same amount to move the adjacent sibling closer.
    </p>
    <hr>

    <h3>Form elements</h3>
    <p>
      Form inputs, buttons, <code>&lt;fieldset&gt;</code>, and <code>&lt;legend&gt;</code> have their paddings adjusted
      (usually to <code>0</code>).
      The form elements that should take up exactly one line have their line-height decreased to fit the top and
      bottom borders within the vertical rhythm base, and the bordered multi-line elements <code>&lt;textarea&gt;</code>,
      <code>&lt;fieldset&gt;</code>, and multi-selects are shifted slightly upwards, using the border module.
    </p>

  </main>
</template>

<style lang="scss">
  @import "~assets/_variables.scss";
  @import "~assets/L3.scss";
</style>
<script>
  import ReloadLink from '../components/reload-link';

  export default {
    components: { ReloadLink }
  };
</script>
