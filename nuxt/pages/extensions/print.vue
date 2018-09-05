<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Extension:</small>
      Print
    </h1>
    <p class="print:links-inside">
      The print extension contains utility classes and default styles for printing web pages.
      You'll find it in <a href="https://github.com/bjuppa/kingdom/blob/master/src/extensions/_print.scss"
                           target="_blank"><code>src/extensions/_print.scss</code></a>.
    </p>
    <p>
      When printing, the <code>&lt;body&gt;</code> is set to black text on white background by default,
      while <code>&lt;nav&gt;</code> and <code>&lt;aside&gt;</code> are hidden completely.
      <span class="print:hidden">The class <code>print:hidden</code> can be used to remove an element</span>
      &hellip;<span class="print:invisible"> the class <code>print:invisible</code></span> will hide contents when
      printing.
      All <abbr title="abbreviation"><code>&lt;abbr&gt;</code></abbr> elements have their <code>title</code> printed
      after them.
      <strong class="print:hidden">Print this page as a PDF to see the effects!</strong>
    </p>

    <h2>Displaying content only for print</h2>
    <div class="hidden print:block italic border space-inside float-right w-max-half">
      This floated block is only displayed in print using classes <code>hidden</code> and <code>print:block</code>.
    </div>
    <p class="mt-0 print:background-exact">
      The class <code>hidden</code> from the <reload-link to="/utilities/layout/display">display utilities</reload-link>
      combined with either of the classes
      <code>print:block</code>,
      <code>print:inline-block</code>, or
      <code>print:inline</code>
      can be used to hide content except when printing.

      <span class="hidden print:inline italic background-color-gray-100">
        This span is only displayed in print using classes <code>hidden</code> and
        <code>print:inline</code>.
      </span>
      <span class="hidden print:inline-block italic background-color-gray-100 space-inside">
        This span is only displayed in print using classes <code>hidden</code> and
        <code>print:inline-block</code>.
      </span>
    </p>

    <h2 id="printing-links">Printing links</h2>
    <p>
      Any <code>article</code> element, or elements with class <code>print:links-inside</code> will have its contained
      links printed inline, if the <code>href</code> contain the protocol.
      The class <code>print:href</code> can be used on an
      <reload-link to="#printing-links" relative class="print:href">individual element</reload-link>
      to print its <code>href</code> attribute.
    </p>
    <p class="print:links-inside">
      The class <code>print:href-none</code> can be used to override the printing of <code>href</code> on
      <a href="https://github.com/bjuppa/kingdom/blob/master/src/extensions/_print.scss"
         target="_blank" class="print:href-none">individual links</a>
      which can be useful on image links.
    </p>

    <h2>Printing backgrounds</h2>
    <p class="background-color-gray-100 print:background-exact">
      Most browsers won't print backgrounds by default but in WebKit and Firefox the class
      <code>print:background-exact</code> will make backgrounds print on color printers.
      If you don't want to print backgrounds, there's a class
      <code class="background-color-gray-300 print:background-economy">print:background-economy</code>
      to override and also
      <code class="background-color-gray-300 print:background-transparent">print:background-transparent</code>
      that will remove the background and set color to <code>inherit</code> for contrast on black & white printers
      too.
      Class <code>print:shadow-none</code> will remove any box- and text-shadows when printing.
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
