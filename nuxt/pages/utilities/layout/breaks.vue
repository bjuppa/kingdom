<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Layout utilities:</small>
      Breaks
    </h1>
    <p>
      Utilities for hinting breaks within fragmented elements can be included from
      <a
        href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/layout/_breaks.scss"
        target="_blank"
      >
        <code>src/utilities/layout/_breaks.scss</code>
      </a>
      and are useful together with the <reload-link to="columns">column utilities</reload-link>.
    </p>
    <ul class="adjacent-children:mt-1 descendants:mt-0 list-unstyled">
      <li>
        Classes for the
        <code>break-inside</code> property:
        <ul>
          <li>
            <code>avoid-break-inside</code>
          </li>
          <li>
            <code>children:avoid-break-inside</code>
          </li>
          <li>
            <code>allow-break-inside</code>
          </li>
        </ul>
      </li>
      <li>
        Classes for the
        <code>break-after</code> property:
        <ul>
          <li>
            <code>avoid-break-after</code>
          </li>
          <li>
            <code>allow-break-after</code>
          </li>
          <li>
            <code>column-break-after</code>
          </li>
          <li>
            <code>page-break-after</code>
          </li>
        </ul>
      </li>
      <li>
        Classes for the
        <code>break-before</code> property:
        <ul>
          <li>
            <code>avoid-break-before</code>
          </li>
          <li>
            <code>allow-break-before</code>
          </li>
          <li>
            <code>column-break-before</code>
          </li>
          <li>
            <code>page-break-before</code>
          </li>
        </ul>
      </li>
    </ul>

    <p>
      For hinting the number of
      <code>orphans</code> and
      <code>widows</code> in a block, there are utility classes
      <code>orphans-1</code> to
      <code>orphans-10</code> and
      <code>widows-1</code> to
      <code>widows-10</code>.
    </p>
    <p>
      There is also a utility class
      <code>breaks-readable</code> that attempts keeping blocks of text together
      that are at least as tall as the minimum line-length.
      It's useful in situations where the contents would otherwise be split up in many very short columns because of
      the available width.
      The effect is that any paragraph shorter than the column is wide will not break over two columns.
      Derieved from
      <code class="whitespace-no-wrap">$readable-line-length-min</code> this defaults to:
      <pre><code>orphans: 14;
widows: 5;</code></pre>
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
