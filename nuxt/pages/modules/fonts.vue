<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Module:</small>
      Fonts
    </h1>
    <p>
      The fonts module keeps track of registered fonts stacks in the <var>$font-stacks</var> Sass map,
      and provides some mixins.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_fonts.scss"
                           target="_blank"><code>src/modules/_fonts.scss</code></a>.
    </p>

    <div class="visualize-vertical-rhythm">
      <h2>Registering font stacks</h2>
      <p>
        The <code>register-font-stack</code> mixin can be used to add fonts for later use.
        Every font stack has a name, a
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family"
          target="_blank"><code>font-family</code></a>,
        and a <var>$baseline-shift-factor</var>.
      </p>
      <p>
        The baseline-shift-factor is used to shift text down to the baseline, and it needs to be calculated per font.
        Unless you're really lucky, your fallback fonts will unfortunately not match the lines perfectly,
        so focus on the primary font in the stack when setting the <code>$baseline-shift-factor</code>.
        Here's an example how the mixin can be used:
      </p>
      <pre><code>@include register-font-stack('Georgia', (Georgia, serif), 0.62);</code></pre>
      <p>
        There's no easy way to programmatically calculate the <code>$baseline-shift-factor</code> for a font.
        The font stacks that are preregistered in this module (see source code) are set by trial and error using the
        <code>visualize-vertical-rhythm</code> class provided by <reload-link to="/level-3-rhythm">Level 3</reload-link>.
      </p>
      <p>
        If you find the baseline-shift-factor of a common font, pull requests to this module are welcome!
      </p>
    </div>

    <h3>Where is the baseline-shift-factor used?</h3>
    <p>
      Of course <reload-link to="/level-4-baseline">Level 4</reload-link> uses the shift, but also the
      <reload-link to="/extensions/forms">forms extension</reload-link> where it's used to position checkboxes and
      radiobuttons.
      So register your font stacks properly to avoid trouble later!
    </p>

    <h2>Applying a font stack</h2>
    <p>
      With the hard work done when registering a font stack, actually applying it in your CSS is a breeze.
      The mixin <code>font-stack</code> will set the <code>font-family</code> property on an element and its
      descendants as well as the <code>--baseline-shift-factor</code> custom property for use in calculations.
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
  @import "~assets/L4.scss";
</style>
