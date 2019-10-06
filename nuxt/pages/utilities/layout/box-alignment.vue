<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Layout utilities:</small>
      Box alignment
    </h1>
    <p>
      Utilities for aligning and justifying content can be included from
      <a
        href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/layout/_box-alignment.scss"
        target="_blank"
      >
        <code>src/utilities/layout/_box-alignment</code>
      </a> and are mainly used with CSS flexbox and grid.
    </p>
    <p>
      It can be hard finding which CSS properties to use for a specific alignment.
      With these utilities we didn't want to make it even more confusing with some
      <em>clever</em> renaming so we keep the classnames directly derieved from the underlying CSS properties.
    </p>
    <p>
      They are here if you need them, but most projects would probably put specific layout in some kind of components
      anyway, and in such cases these utility classes are rarely needed.
    </p>
    <p>
      Please check out
      <a
        href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment"
        target="_blank"
      >Rachel Andrew's Box Alignment Cheatsheet</a> for the details of these properties!
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
