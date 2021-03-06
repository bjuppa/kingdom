<template>
  <main class="space-inside paragraphs:w-readable visualize-vertical-rhythm">
    <h1>
      <small>Level&nbsp;4:</small>
      Baseline Rhythm
    </h1>
    <p>
      Lining up text in adjacent columns on the same <em>baseline</em> is a thing that is uncommon on the web but
      prevalent in print design.
      You probably won't reach for Kingdom's 4th level very often, but if you'd ever need to position text on the
      baseline it's a good tool.
    </p>

    <aside>
      <p class="text-small-block">
        There's actually a W3C Working Draft
        (<a href="https://www.w3.org/TR/css-line-grid-1/" target="_blank">CSS Line Grid Module Level&nbsp;1</a>)
        that attempts to solve similar problems.
        I hope one day Level&nbsp;IV of the Kingdom will abdicate in favor of a new ruler enjoying popular support&hellip;
      </p>
    </aside>

    <p>
      This webpage is displayed with Level&nbsp;4 and all utilities of Kingdom applied so you can quickly see its
      effects in your particular browser.
    </p>

    <p>
      You can check out the source code at <a href="https://github.com/bjuppa/kingdom/blob/master/src/_L4-baseline.scss"
                                              target="_blank"><code>src/_L4-baseline.scss</code></a>
      and of course, <reload-link to="level-3-rhythm">Level&nbsp;3</reload-link> is included, so everything from there
      applies in Level&nbsp;4 too.
    </p>

    <h2>Shifting text down to the baseline</h2>
    <p>
      This page has the "lines" of the vertical rhythm visualized in the background so you can see how it affects the
      paragraphs and the headings.
      You can also <reload-link to="/demo" target="basic-demo">compare levels 3 and 4 on the demo page</reload-link>
      where the lines are displayed for both levels.
    </p>
    <p>
      Level&nbsp;4 will apply baseline shift to the most common block elements that are usually used for typography.
      This of course includes the <code>&lt;p&gt;</code> element, as well as the headings, but list items,
      <code>&lt;blockquote&gt;</code>, and <code>&lt;address&gt;</code> are also shifted.
    </p>
    <p>
      The shift is created using relative positioning and the amount of shift is specific to each font.
      Therefore, every font you want to use with the baseline rhythm needs to be registered with its specific
      <code>baseline-shift-factor</code> in the Kingdom <reload-link to="/modules/fonts">Fonts module</reload-link>.
    </p>

    <div class="baseline-shift-none">
      <h3>Resetting the baseline-shift</h3>
      <p>
        If you ever find that you want to remove the baseline-shift that is applied to or inside an element, apply the
        class <code>baseline-shift-none</code> on a shifted element, or an ancestor.
        This section has it, and the navigation at the top of this page also need it for its list items.
      </p>
    </div>

    <h3>Default fonts</h3>
    <p>
      The 4th level is the only one in Kingdom that applies fonts by default; for headlines a sans-serif font and for
      body text a font with serifs.
      It's just for the purpose of demonstration, whenever you're in a situation where you reach for baseline shift
      you will likely have very specific <reload-link to="/modules/fonts">font-stacks</reload-link> you want to use,
      and calculate the <code>baseline-shift-factor</code> yourself.
    </p>

    <aside class="clearfix descendants:mt-0 text-center w-readable">
      <div class="w-max-half float-left">
        <p class="text-1-block">Text 1</p>
        <p class="text-2-block">Text 2</p>
        <p class="text-3-block">Text 3</p>
        <p class="text-4-block">Text 4</p>
        <p class="text-5-block">Text 5</p>
        <p class="text-6-block">Text 6</p>
      </div>
      <div class="w-max-half float-left">
        <p class="text-6-block">Text 6</p>
        <p class="text-5-block">Text 5</p>
        <p class="text-4-block">Text 4</p>
        <p class="text-3-block">Text 3</p>
        <p class="text-2-block">Text 2</p>
        <p class="text-1-block">Text 1</p>
      </div>
    </aside>

    <h4>Font inheritance</h4>
    <p>
      Whenever a <reload-link to="/modules/fonts">font-stack</reload-link> is applied through Kingdom,
      that font is inherited by all child elements, so browsers' default fonts on all elements are reset.
      If you need a monospace font back on <code>&lt;code&gt;</code> and other similar elements in Level 4,
      just include the <reload-link to="/extensions/code">code extension</reload-link>.
      Likewise, if you don't want the body font-stack on inputs and form elements you can include the
      <reload-link to="/extensions/forms">forms extension</reload-link>.
    </p>

    <h2>Limitations</h2>
    <ul class="w-readable">
      <li>
        The amount of shift applied is calculated using CSS calc from CSS custom properties.
        In browsers not supporting both (notably IE and Opera Mini) the 4th level of Kingdom has no effect, basically
        rendering like only <reload-link to="level-3-rhythm">Level&nbsp;3</reload-link> was applied.
      </li>
      <li>
        CSS columns with baseline-shifted elements inside are rendered inconsistently in different browsers.
        Descenders may be cut off att column breaks and elements after the columns may be shifted out of the vertical
        rhythm.
      </li>
    </ul>

  </main>
</template>

<style lang="scss">
  @import "~assets/_variables.scss";
  @import "~assets/L4.scss";
</style>
<script>
  import ReloadLink from '../components/reload-link';

  export default {
    components: { ReloadLink }
  };
</script>
