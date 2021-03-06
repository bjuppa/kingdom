<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Extension:</small>
      Forms
    </h1>
    <p>
      The forms extension contains default styles for displaying form inputs and related elements in HTML.
      Check out the <reload-link to="/forms-demo" target="forms-demo">the forms demo page</reload-link>
      to see it in action!
    </p>

    <h2>Form layout</h2>
    <p>
      The biggest thing the forms extension does is actually turning <code>&lt;label&gt;</code> elements into blocks.
      The consequence is that you can stack up labels and their inputs in your HTML without any wrapping elements
      whatsoever and get a decent looking form.
      But if you have wrapping elements grouping labels and form controls, that's fine, it works that way too!
    </p>
    <p>
      There's one exception and that is labels that come just after their checkbox or radiobutton&mdash;they go inline.
      And if you really want an inline form there's a helper class <code>form-inline</code> for that.
    </p>
    <h3>Spacing</h3>
    <p>
      If you find an element in your form having vertical spacing where you don't want it, just add class
      <code>mt-0</code>.
      If you want to group some elements or bring one element to a new line with spacing above (like a button),
      just wrap it in a simple <code>&lt;div&gt;</code>!
    </p>
    <h3>Checkboxes & radiobuttons</h3>
    <p>
      The position of checkboxes and radiobuttons is adjusted using the <code>baseline-shift-factor</code>,
      so if you ever find them being misaligned, make sure your <var>$forms-font-stack</var> is correctly registered
      in the <reload-link to="/modules/fonts">Fonts module</reload-link>.
    </p>

    <h2>Buttons</h2>
    <div class="w-readable children:mt-0">
      Buttons come in three base variants, with classes:
      <ul class="list-inline children:space-horizontally flex flex-wrap justify-content-space-evenly children:mt-1 pb-1">
        <li><code class="button-prime">button-prime</code></li>
        <li><code class="button-plain">button-plain</code></li>
        <li><code class="button-petty">button-petty</code></li>
      </ul>
      &hellip;all combinable with modifiers for double size:
      <ul class="list-inline children:space-horizontally flex flex-wrap justify-content-space-evenly children:mt-1 pb-1">
        <li><code class="button-prime button-large">button-prime button-large</code></li>
        <li><code class="button-plain button-large">button-plain button-large</code></li>
        <li><code class="button-petty button-large">button-petty button-large</code></li>
      </ul>
      &hellip;as well as modifiers to communicate caution:
      <ul class="list-inline children:space-horizontally flex flex-wrap justify-content-space-evenly children:mt-1 pb-1">
        <li><code class="button-prime button-destructive">button-prime button-destructive</code></li>
        <li><code class="button-plain button-destructive">button-plain button-destructive</code></li>
        <li><code class="button-petty button-destructive">button-petty button-destructive</code></li>
      </ul>
      &hellip;and of course there are variants for focused, active, and disabled states as well that you can see on
      <reload-link to="/forms-demo" target="forms-demo">the forms demo page</reload-link>.
    </div>

    <h2>Customization</h2>
    <p>
      Should you want to customize the colors, borders, shadows, backgrounds, outlines, padding, transitions,
      or text-decoration of inputs and button variants there's an abundance of default variables at the top of the
      extension's source code that you are free to override with your own values before including it.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/extensions/_forms.scss"
                           target="_blank"><code>src/extensions/_forms.scss</code></a>.
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
  @import "../../../src/extensions/forms";
</style>
