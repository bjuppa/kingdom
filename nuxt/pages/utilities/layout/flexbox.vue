<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Layout utilities:</small>
      Flexbox
    </h1>
    <p>
      Utilitites for flexbox can be included from
      <a
        href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/layout/_flexbox.scss"
        target="_blank"
      >
        <code>src/utilities/layout/_flexbox.scss</code>
      </a>.
    </p>
    <div class="flex flex-wrap children:space-inside">
      <!-- TODO: Style this flex container with negative margins and backgrounds when those utils have been created. -->
      <p>
        Turning an element into a flex container can be done with utility classes
        <code>flex</code> and
        <code>inline-flex</code>, that will not only set the
        <code>display</code> property, but also reset
        <code>margin-top</code> of its children and inherit
        <code>line-height</code>.
        This removes the default Kingdom styles that are appropriate for normal block content,
        but undesirable in a flexbox context.
      </p>
      <p>
        The
        <code>flex-direction</code> can be set with
        <code>flex-row</code>,
        <code>flex-row-reverse</code>,
        <code>flex-col</code> or
        <code>flex-col-reverse</code>.
      </p>
      <p>
        The
        <code>flex-wrap</code> property can be set with
        <code>flex-no-wrap</code>,
        <code>flex-wrap</code> or
        <code>flex-wrap-reverse</code>.
      </p>
    </div>
    <!-- TODO: Document the flex item utils when they have been completed. -->
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
