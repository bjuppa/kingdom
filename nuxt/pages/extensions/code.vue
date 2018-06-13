<template>
  <main class="space-inside w-readable">
    <h1>
      <small>Extension:</small>
      Code
    </h1>
    <p>
      The code extension contains default styles for displaying code and related elements in html.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/extensions/_code.scss"
                           target="_blank"><code>src/extensions/_code.scss</code></a>.
    </p>
    <h2>Monospace</h2>
    <div>
      The code extension makes sure appropriate elements&mdash;such as
      <ul class="list-comma-separated">
        <li><code>&lt;code&gt;</code></li>
        <li><code>&lt;pre&gt;</code></li>
        <li><code>&lt;kbd&gt;</code></li>
        <li><code>&lt;samp&gt;</code></li>
      </ul>&mdash;are rendered in the configured <span class="font-monospace">monospace</span> font.
    </div>
    <p>
      This is handy whenever a <reload-link to="/modules/fonts">font-stack</reload-link>
      has been explicitly applied to the <code>&lt;body&gt;</code> (which overrides the browser defaults).
      For example, <reload-link to="/level-4-baseline">Level&nbsp;4</reload-link> sets an explicit font stack,
      and its demo page has this code extension included.
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
@import "../../../src/extensions/code";
</style>
