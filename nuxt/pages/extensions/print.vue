<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>
      <small>Extension:</small>
      Print
    </h1>
    <p class="print-links-inside">
      The printing module contains utility classes for printing web pages.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/extensions/_print.scss"
                           target="_blank"><code>src/extensions/_print.scss</code></a>.
    </p>
    <p>
      Print this page as a pdf to see the effects!
    </p>

    <h2>Displaying content only for print</h2>
    <div class="print-only-block italic border space-inside float-right w-max-half">
      This floated block is only displayed in print using class <code>print-only-block</code>.
    </div>
    <p class="mt-0">
      The classes <code>print-only-block</code>, <code>print-only-inline-block</code>, and
      <code>print-only-inline</code> can be used to hide content except when printing.

      <span class="print-only-inline italic background-color-gray-100">
        This span is only displayed in print using class
        <code>print-only-inline</code>.
      </span>
      <span class="print-only-inline-block italic background-color-gray-100 space-inside">
        This span is only displayed in print using class
        <code>print-only-inline-block</code>.
      </span>
    </p>

    <h2 id="printing-links">Printing links</h2>
    <p>
      Any <code>article</code> element, or elements with class <code>print-links-inside</code> will have it's contained
      links printed inline, if the <code>href</code> contain the protocol.
      The class <code>print-href</code> can be used on an
      <reload-link to="#printing-links" relative class="print-href">individual element</reload-link>
      to print its <code>href</code> attribute.
    </p>
    <p class="print-links-inside">
      The class <code>hide-href</code> can be used to override the printing of href on
      <a href="https://github.com/bjuppa/kingdom/blob/master/src/extensions/_print.scss"
         target="_blank" class="hide-href">individual links</a>
      which can be useful on image links.
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
  @import "../../../src/extensions/print";
</style>
