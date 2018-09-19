<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Level&nbsp;2:</small>
      Spacing & Sizing
    </h1>
    <p>
      The 2nd level of Kingdom applies consistent text sizes, line heights, and spacing between blocks.
      The defaults include slightly larger text than user-agent stylesheets usually apply, with a hefty line height for
      improved readability.
      The font sizes follow a modular scale with gradually smaller line heights as text get larger.
      Finally, the base spacing used throughout the rest of the CSS defaults to correspond to the line height of
      the body text, making paragraphs easy to distinguish from each other.
      All of these defaults can be changed to your own liking by setting Sass-variables before importing the Kingdom
      level.
    </p>
    <p>
      This webpage is displayed with Level&nbsp;2 and all utilities of Kingdom applied so you can quickly see its
      effects in your particular browser.
    </p>
    <p>
      You can check out the source code at <a href="https://github.com/bjuppa/kingdom/blob/master/src/_L2-sizing.scss"
                                              target="_blank"><code>src/_L2-sizing.scss</code></a>
      and of course, <reload-link to="level-1-reset">Level&nbsp;1</reload-link> is included, so everything from there
      applies in Level&nbsp;2 too.
    </p>

    <h2>Spacing by <code>margin-top</code></h2>
    <p>
      The spacing scheme of Kingdom works by resetting all margins to <code>0</code> and then applying
      <code>margin-top</code> to those elements that need space before them. So, <code>margin-bottom</code> should
      generally be kept at <code>0</code>, or negative values for some special use cases.
    </p>

    <h3>A base for space</h3>
    <p>
      All spacing values in Kingdom are derived from the <var>$spacing-base</var> Sass-variable.
      If you want to be specific you may set it explicitly, but the default is rather nifty as it's equal to the
      line-height of the body text, making all spacing related to the rhythm of the text.
      The spacing base can be set in any CSS length unit, but <code>rem</code> is recommended.
    </p>
    <p>
      By limiting all spacing in the design to <em>multiples</em> and <em>specific fractions</em> of the spacing base,
      you not only achieve visual consistency, you also speed up decisions as there is just a finite set of values to
      select from.
      If you include the spacing utilities, you also have corresponding CSS classes available making experimenting with
      spacing directly in your HTML super quick.
    </p>

    <h3>Use placeholders</h3>
    <p>
      There are plenty of Sass placeholders for you to extend that helps keeping sizing consistent.
      If you're ever about to set <code>margin</code> or <code>padding</code>, <code>height</code> or
      <code>width</code>, or any other length property in your CSS, try to find a suitable placeholder first!
    </p>
    <p>
      Whenever you find that none of the placeholders fit the job, you can use <reload-link to="modules/sizing">mixins
      from the sizing module</reload-link> or even the <var>$spacing-base</var> Sass variable or the
      <var>--spacing-base</var> CSS custom property.
    </p>
    <h3>Space elements from the <em>outside</em></h3>
    <p>
      Try to control margin on elements <em>from the outside</em>
      (using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators" target="_blank">
      CSS combinators</a>)
      whenever possible, and avoid having components set their own margins "on themselves".
      Spacing between elements should be seen as a <em>layout</em> concern, so its usually good to apply it in
      relation to children, descendants, and sibling elements.
    </p>
    <p>
      Padding on the other hand is a property that is intrinsic to an element or component itself, so feel free to
      apply it however you fancy. Keep in mind though that Kingdom provides plenty of handy placeholders,
      which will help in keeping all spacing consistent, for both margins and padding.
    </p>

    <h2>Default spacing between all adjacent elements</h2>
    <p>
      After Kingdom has reset all margins to <code>0</code>, a default vertical spacing between any adjacent
      elements is added using the "lobotomized owl selector" <code>* + *</code>.
      This is of course inspired by
      <a
        href="https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/#layout"
        target="_blank"> Heydon Pickering's technique</a>.
      So, any element that comes after another element will have the default spacing applied before it.
      That selector has very low specificity so can easily be overridden when needed, and that is just what
      Kingdom does next&hellip;
    </p>

    <h3>Keeping related elements close</h3>
    <p>
      There are some elements that are usually semantically related to their following elements, and it's a good
      idea to keep those siblings visually close together as well.
      This thinking is applied to heading and list item elements, so Kingdom will make sure the space between
      them and their next sibling is set to <code>0</code>.
    </p>
    <p>
      Some elements are meant to group other elements that are all closely related, so Kingdom will also make sure
      there's no vertical spacing between elements inside <code>&lt;table&gt;</code>, <code>&lt;figure&gt;</code>,
      <code>&lt;picture&gt;</code> and some other grouping elements.
    </p>
    <p>
      Spacing above
      <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"
         target="_blank">inline elements</a>
      would also mess up most designs, so their <code>margin-top</code> is also set to <code>0</code>.
      This includes <code>&lt;a&gt;</code>, <code>&lt;del&gt;</code>, and <code>&lt;ins&gt;</code> tags,
      as well as buttons, form inputs and images within paragraphs, although techically they're not inline elements.
    </p>

    <h2>Consistent text</h2>
    <p>
      To get rid of any user-agent quirks related to text sizes, Kingdom's 2nd level will make sure all elements
      inherit <code>font-size</code> and <code>line-height</code> from their parent by default.
      Then, those properties are specifically set on the <code>&lt;body&gt;</code>, the heading elements
      <code>1</code>&ndash;<code>6</code>,
      as well as the inline elements <code>&lt;small&gt;</code>, <code>&lt;sub&gt;</code>, and <code>&lt;sup&gt;</code>.
    </p>

    <h3>The list of font-sizes</h3>
    <p>
      The font sizes are kept in a Sass-list named <var>$font-sizes</var> that will have at least 6 sizes in it.
      If the list is empty, the first font size defaults to a <code>rem</code> value converted from
      <var>$desired-body-font-size</var>&mdash;which in turn defaults to <code>18px</code>.
      The <var>$font-sizes</var> list is filled up to length 6 with gradually increasing values by multiplying the
      previous size with <var>$modular-scale</var> (default&nbsp;<code>1.2</code>).
    </p>
    <p>
      The first size in the list is applied to body text and <code>&lt;h4&gt;</code> elements.
      Headings above level&nbsp;4 will get gradually larger sizes from the list and heading levels 5 and 6 will use
      relative sizes derived from <var>$font-size-smaller</var> (which is calculated from <var>$modular-scale</var> by
      default).
    </p>

    <aside>
      <p>
        Kingdom avoids setting <code>font-size</code> on <code>:root</code>, instead assuming this is <code>16px</code>
        by default in user-agent stylesheets.
        Then all length values specified in <code>rem</code> are also relative to the user-agent's default font setting.
      </p>
    </aside>

    <h3>The list of line heights</h3>
    <p>
      Each of the font sizes have a corresponding line-height kept in <var>$line-heights</var>, another Sass-list.
      If not set before, these line heights are generated along a linear slope from <var>$body-line-height-factor</var>
      (default&nbsp;<code>1.5</code>) for the first font-size, all the way down to <var>$min-line-height-factor</var>
      (default&nbsp;<code>1.2</code>) for the 6th font-size.
    </p>
    <p>
      Whenever an inline element having a different text size than the block level element containing it, the
      <code>line-height</code> of that inline element is adjusted to <code>0</code> if the text fits within the block's
      <code>line-height</code>, or <code>1</code> if it needs more space on the line.
      The effect can be seen on size&nbsp;4, which is the first text size to exceed the line-height of the body text.
    </p>

    <aside>
      <ul>
        <li><strong class="text-x-small">Heading 6</strong> gets a really small size&mdash;it's rarely used anyway...
        </li>
        <li>
          <strong class="text-small">Heading 5</strong> along with <sub>subscript</sub>, <sup>superscript</sup>, and
          <small>small</small> texts get their size from <var>$font-size-smaller</var>
        </li>
      </ul>
      <ol class="mt-0">
        <li>
          <strong class="text-1">Heading 4</strong> and body text is sized from the 1st value of <var>$font-sizes</var>
        </li>
        <li><strong class="text-2">Heading 3</strong> is sized from the 2nd value of <var>$font-sizes</var></li>
        <li><strong class="text-3">Heading 2</strong> is size 3</li>
        <li><strong class="text-4">Heading 1</strong> is size 4</li>
        <li><span class="text-5">Text size 5</span> is in <var>$font-sizes</var>, but not applied to any elements</li>
        <li><span class="text-6">Text size 6</span> is also not used directly by Kingdom</li>
      </ol>
    </aside>

    <div class="w-readable columns-2">
      <h2>Lines not lining up</h2>
      <p>
        As you may see in this section, when texts of different font sizes are in adjacent columns, the lines of text
        become misaligned.
        The height taken up by the larger heading is not a multiple of the body text's line-height, and this can cause
        trouble in multi-column layouts.
        This is where <reload-link to="level-3-rhythm">Level&nbsp;3 can help apply a consistent <em>vertical
        rhythm</em></reload-link> to your typography!
      </p>
    </div>

  </main>
</template>

<style lang="scss">
  @import "~assets/_variables.scss";
  @import "~assets/L2.scss";
</style>
<script>
  import ReloadLink from '../components/reload-link';

  export default {
    components: { ReloadLink }
  };
</script>
