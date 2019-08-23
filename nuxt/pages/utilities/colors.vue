<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Utilities:</small>
      Colors
    </h1>
    <p>
      Colors can be set using utility classes and CSS custom properties from
      <a
        href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/_colors.scss"
        target="_blank"
      >
        <code>src/utilities/_colors.scss</code>
      </a>.
    </p>
    <p>
      Every color registered in
      <var>$colors</var> through the
      <reload-link to="/modules/colors">Colors module</reload-link>
      have corresponding utility classes and CSS custom properties on
      <code>:root</code>.
    </p>
    <h2>Utilities for registered colors</h2>
    <p>
      For every color, the class
      <code class="color-primary">color-...</code>, for example
      <code>color-primary</code>, will apply that color and
      <code class="background-color-primary">background-color-...</code> will apply color to the background
      <em>and</em> any corresponding text color.
    </p>
    <p class="border-color-primary border links-color-primary">
      <code>border-color-...</code> apply to
      <reload-link to="/utilities/borders">borders</reload-link>
      and
      <code>links-color-...</code> applies to any links inside.
    </p>
    <h2>Other utilities</h2>
    <p>
      A quick utitlity for matching links to surrounding text is
      <code>links-color-currentColor</code>.
      There are also
      <code>color-transparent</code>,
      <code>color-inherit</code>,
      <code>border-color-transparent</code>, and
      <code>background-color-transparent</code> to help setting the more unusual "colors".
    </p>
  </main>
</template>

<script>
import ReloadLink from "~/components/reload-link.vue";

export default {
  components: {
    "reload-link": ReloadLink
  }
};
</script>

<style lang="scss">
@import "~assets/_variables.scss";
@import "~assets/L3.scss";
</style>
