<template>
  <main class="space-inside">
    <h1>
      <small>Level 4:</small>
      Baseline Rhythm
    </h1>
    <p>
      Lining up text in adjacent columns on the same <em>baseline</em> is a thing that is uncommon on the web but
      prevalent in print design.
      You probably won't reach for Kingdom's 4th level very often, but if you'd ever need to position text on the
      baseline it's a good tool.
    </p>
    <p>
      There's actually a W3C Working Draft
      (<a href="https://www.w3.org/TR/css-line-grid-1/" target="_blank">CSS Line Grid Module Level 1</a>)
      that attempts to solve similar problems.
      I hope one day Level IV of the Kingdom will abdicate in favor of a new ruler, perhaps with popular support&hellip;
    </p>
    <p>
      This webpage is displayed with Level 4 and all utilities of Kingdom applied so you can quickly see its effects in
      your particular browser.
    </p>

    <div class="visualize-vertical-rhythm">
      <h2>Shifting text down to the baseline</h2>
      <p>
        This section has the "lines" of the vertical rhythm visualized in the background so you can see how it affects
        the paragraphs and the headings.
        You can also <reload-link to="/demo" target="basic-demo">compare levels 3 and 4 on the demo page</reload-link>
        where the lines are displayed for both levels.
      </p>
      <p>
        Level 4 will apply baseline shift to the most common block elements that are usually not used for other things
        than typography. This is of course the <code>&lt;p&gt;</code> element, as well as the headings, but list items,
        <code>&lt;blockquote&gt;</code>, and <code>&lt;address&gt;</code> is also shifted.
      </p>
      <p>
        The shift is created using relative positioning and the amount of shift is specific to each font.
        Therefore, every font you want to use with the baseline rhythm needs to be registered with its specific
        <code>baseline-shift-factor</code> in the Kingdom <reload-link to="/modules/fonts">fonts module</reload-link>.
      </p>
      <h3>Default fonts</h3>
      <p>
        The 4th level is the only one in Kingdom that applies fonts by default, for headlines a sans-serif font and for
        body text a font with serifs.
        It's just for the purpose of demonstration, whenever you're in a situation where you reach for baseline shift
        you will likely have very specific fonts you want to use, and calculate the <code>baseline-shift-factor</code>
        yourself.
      </p>
    </div>

    <aside>
      <div class="visualize-vertical-rhythm" style="columns: 2;">
        <p class="text-1">Text 1</p>
        <p class="text-2">Text 2</p>
        <p class="text-3">Text 3</p>
        <p class="text-4">Text 4</p>
        <p class="text-5">Text 5</p>
        <p class="text-6">Text 6</p>

        <p class="text-6">Text 6</p>
        <p class="text-5">Text 5</p>
        <p class="text-4">Text 4</p>
        <p class="text-3">Text 3</p>
        <p class="text-2">Text 2</p>
        <p class="text-1">Text 1</p>
      </div>
    </aside>

    <h2>Limitations</h2>
    <p>
      The amount of shift applied is calculated using CSS calc from CSS custom properties.
      In browsers not supporting both (notably IE and Opera Mini) the 4th level of Kingdom has no effect,
      basically rendering a page like only Level 3 was applied.
    </p>

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
