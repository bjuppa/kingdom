<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Module:</small>
      Responsive Locks
    </h1>
    <p>
      This module provides mixins for doing linear transitions following viewport widths.
      It's been inspired by works of
      <a href="http://www.sassmeister.com/gist/7f22e44ace49b5124eec" target="_blank">Indrek Paas</a>
      and <a href="https://fvsch.com/code/css-locks/" target="_blank">Florens Verschelde</a>,
      who in turn were inspired by
      <a href="https://www.madebymike.com.au/writing/precise-control-responsive-typography/"
         target="_blank">Mike Riethmuller's "Precise control over responsive typography"</a> and
      <a href="https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/"
             target="_blank">Tim Brown's "Flexible typography with CSS locks"</a>.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/modules/_responsive-locks.scss"
                           target="_blank"><code>src/modules/_responsive-locks.scss</code></a>.
    </p>

    <h2>What are we trying to achieve?</h2>
    <p>
      We want a CSS property to scale from a start value to an end value between certain breakpoints.
      This can be done with manual calculations, but using these mixins makes it easier.
    </p>

    <div class="w-readable">
      <h2>The common use cases</h2>
      <aside class="responsive-lock-example background-color-gray-100 float-right ml-1/4 space-inside text-center">
        This box scales both width & height linearly from <code>250px</code> to <code>500px</code> between
        break&shy;points at <code>400px</code> and <code>800px</code>.
      </aside>
      <p class="mt-0">
        Mixin <code>responsive-lock</code> will keep a property constant at the start value up to the first breakpoint.
        From the first breakpoint it will apply the linear transition, reaching the end value at the second
        breakpoint.
        The end value is kept constant from the second breakpoint and up.
      </p>
      <aside class="h-6 responsive-font-example background-color-gray-300 space-inside">
        This font size is scaled from <code>16px</code> to <code>30px</code> between
        break&shy;points at <code>400px</code> and <code>800px</code>.
      </aside>
      <p>
        When scaling fonts it's usually a good idea to set the <code>line-height</code> relative the elements own
        font-size.
      </p>
      <h2>What about relative sizes?</h2>
      <p>
        It is possible to use <code>rem</code>-parameters with the mixins, as long as both the viewport widths and the
        min and max values are in the same unit.
        However, it's usually recommended to stick with pixels here.
        A <code>rem</code> unit can always be converted to <code>16px</code> for breakpoints anyway.
      </p>
    </div>

    <h2>Advanced usage</h2>
    <p>
      If you want differently sloped transitions between different breakpoints you may venture into using the
      <code>responsive-linear-transition</code> mixin directly.
      It's used by the other mixins and focuses on just the transition part between the two breakpoints,
      and doesn't set any properties outside the breakpoints.
    </p>

    <h2>What about the vertical rhythm?</h2>
    <p>
      As these mixins do linear transitions, they won't follow the discrete steps for heights that the vertical
      rhythm depends on.
      But it can be used on elements within fixed height containers, or on floated elements.
      There's also a mixin for scaling in discrete steps available in the
      <reload-link to="/modules/flow-rhythm">Flow rhythm module</reload-link>.
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
  @import "../../../src/modules/responsive-locks";

  .responsive-lock-example {
    @include responsive-lock(400px, 800px, (height width), 180px, 300px);
  }

  .responsive-font-example {
    @include responsive-lock(400px, 800px, (font-size), 16px, 30px);
    line-height: 1.1;
  }
</style>
