<template>
  <main class="space-inside w-readable-paragraphs">
    <h1>Kingdom CSS</h1>
    <p>
      A CSS framework, written in <a href="http://sass-lang.com" target="_blank">Sass</a>,
      for consistent spacing, sizing and typography.
    </p>
    <p>
      <strong>Kingdom is still under development</strong>,
      we're not at version <code>1.0</code> yet,
      so expect <em>everything</em> to be in a state of flux!
      You can check the <a href="https://github.com/bjuppa/kingdom/releases" target="_blank">release history</a>
      and any <a href="https://github.com/bjuppa/kingdom/issues" target="_blank">comments or suggestions</a> are most
      welcome!
    </p>
    <p>
      The main task of Kingdom is to put a solid base styling on your common semantic HTML&mdash;that doesn't
      necessarily have any classes&mdash;like you would expect to be input by a somewhat tech-savvy content editor, or
      perhaps generated from <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank">Markdown</a>.
      The pages of this documentation is a living example&mdash;go on, inspect its elements in your browser's dev-tools!
    </p>
    <p>
      Kingdom doesn't provide ready-made components or widgets like cards or navbars.
      It's not for bootstrapping your site with someone else's design.
      Instead, Kingdom is a foundation with sensible defaults for building your own custom design (system).
    </p>
    <p>
      Much like <a href="https://tailwindcss.com/docs/what-is-tailwind/" target="_blank">Tailwind</a>, Kingdom is
      utility-first&mdash;meaning it has CSS classes that can be combined on your HTML elements to quickly create more
      complex looks.
      Like the following <code>&lt;blockquote&gt;</code>, that just has a bunch of utility-classes
      (<code>text-4-block border-l space-inside color-primary</code>)
      applied to style it:
    </p>

    <blockquote class="text-4-block border-l space-inside color-primary">
      <i>If content is king, context is the kingdom</i>
    </blockquote>

    <p>
      Then, when the need arises, you can create your own CSS components&mdash;with your own structure and naming
      system&mdash;that encapsulate those behaviours for reuse.
      For example, you might combine the above into your own
      <a href="http://getbem.com/introduction/" target="_blank">BEM-style component</a> that you apply to elements
      wherever this particular pattern is needed.
      Or perhaps you want this opinionated style on every <code>&lt;blockquote&gt;</code> element?
      You're free to do that too!
    </p>
    <p>
      When it comes to this, Kingdom has plenty of Sass mixins, functions, and placeholders to support you in keeping
      everything consistent throughout <em>your</em> design system.
    </p>
    <p>
      There's also a point in having a limited, but carefully selected, set of building blocks&mdash;it helps you make
      decisions faster.
      Do you need some padding inside a bordered element so that its text content doesn't lay tight on the border?
      Just extend <code>.space-inside</code> or include <code>space-inside()</code> and you're set.
      There's no need to think about how many pixels or other length units you need for every specific
      case&mdash;you've already made that decision in one central place!
    </p>

    <h2>Installation via npm</h2>
    <p>
      <kbd>npm install kingdom-css</kbd>
    </p>

    <h2>Demos</h2>
    <p>
      The demo pages are set up with no options at all, meaning they even generate a random primary color.

      To see an example of all four levels of Kingdom side by side, you can visit
      <reload-link to="/demo" target="basic-demo">the demo page</reload-link>.

      The form extension can be seen in action on
      <reload-link to="/forms-demo" target="forms-demo">the forms demo page</reload-link>.
    </p>

    <h2>Not for the faint of heart</h2>
    <p>
      Kingdom CSS embraces the cascade, is utility-first, has no namespacing, extensively extends css classes,
      and does all kinds of other things that might seem scary and are sometimes even frowned upon.
      Not everyone will like it, and there are certainly situations where its not the best fit.
      But there is a thought behind it all, and I hope this documentation will eventually convey both the why and
      how of each realm within the Kingdom.
    </p>

    <h2>Constitution</h2>
    <p>
      Kingdom CSS consists of <strong>four <em>levels</em></strong> to choose from,
      where each level adds some functionality on top of the previous.
      After selecting a level by importing its file, there are some optional <em>utilities</em> (providing classes for
      styling elements) and <em>extensions</em> (that directly affect element styles) available to include.
      Every import has default options, configurable with Sass variables.
    </p>

    <p>
      This webpage is displayed using Level&nbsp;3, with all utilities of Kingdom included.
      Only one configuration variable, the <span class="color-primary"><code>primary</code> color</span>, is set before
      the Kingdom level is included.
      Everything else is default, and additional colors are automatically derived from the primary color.
    </p>

    <p>
      Most everything in Kingdom relies on Sass mixins and functions from the <em>modules</em>.
      But they're not just for internal use&mdash;you can benefit from using them in your own Sass.
    </p>

    <h3>The four levels</h3>
    <p>
      You'll find each level's Sass file in
      <a href="https://github.com/bjuppa/kingdom/tree/master/src"
         target="_blank"><code>node_modules/kingdom-css/src/</code></a>
      and you should pick and import only one.
    </p>
    <ol class="w-readable-children">
      <li>
        The <reload-link to="/level-1-reset"> 1st level</reload-link> is an opinionated <strong>CSS reset</strong>,
        laying a foundation for the other levels.
      </li>

      <li>
        The <reload-link to="/level-2-sizing">2nd level</reload-link> applies consistent <strong>spacing</strong>
        between blocks and a scale for <strong>sizing</strong> text elements.
      </li>

      <li>
        The <reload-link to="/level-3-rhythm">3rd level</reload-link> adds a <strong>vertical rhythm</strong>, helping
        blocks to line up across columns by keeping line heights consistent.
      </li>

      <li>
        The <reload-link to="/level-4-baseline">4th level</reload-link> makes every line of text go on a common
        <strong>baseline</strong>, making individual lines of text line up across columns, even if they're in different
        font sizes.
      </li>
    </ol>

    <h3>Utilities</h3>
    <p>
      These files provide utility classes that you can put directly on your HTML elements.
      You'll find them in
      <a href="https://github.com/bjuppa/kingdom/tree/master/src/utilities"
         target="_blank"><code>node_modules/kingdom-css/src/utilities/</code></a>
      and you may import any one you'd need, in any order.
    </p>

    <ul>
      <li>
        <reload-link to="/utilities/borders">Borders</reload-link>
      </li>
      <li>
        <reload-link to="/utilities/colors">Colors</reload-link>
      </li>
      <li>
        <reload-link to="/utilities/layout">Layout</reload-link>
      </li>
      <li>
        <reload-link to="/utilities/sizing">Sizing</reload-link>
      </li>
      <li>
        <reload-link to="/utilities/spacing">Spacing</reload-link>
      </li>
      <li>
        <reload-link to="/utilities/text">Text</reload-link>
      </li>
    </ul>

    <h3>Extensions</h3>
    <p>
      Some things affect the default styling of standard HTML elements in such an opinionated way that they're best kept
      in their own "package" for optional inclusion.
      The extensions are located in
      <a href="https://github.com/bjuppa/kingdom/tree/master/src/extensions"
         target="_blank"><code>node_modules/kingdom-css/src/extensions/</code></a>
      and you may "scope" an extension by importing it within a selector.
    </p>

    <ul>
      <li>
        <reload-link to="/extensions/forms">Forms</reload-link>
      </li>
      <li>
        <reload-link to="/extensions/tables">Tables</reload-link>
      </li>
      <li>
        <reload-link to="/extensions/print">Print</reload-link>
      </li>
      <li>
        <reload-link to="/extensions/code">Code</reload-link>
      </li>
      <li>
        <reload-link to="/extensions/breakpoints">Breakpoints</reload-link>
      </li>
    </ul>

    <h3>Modules</h3>
    <p>
      Some of the modules are just a single function or mixin for a specific task, but most consists of many mixins and
      functions providing related functionality.
      You'll find the modules in
      <a href="https://github.com/bjuppa/kingdom/tree/master/src/modules"
         target="_blank"><code>node_modules/kingdom-css/src/modules/</code></a>
      and they can be included wherever you need some functionality within.
    </p>
    <p>
      Most of the modules are already imported and can be implicitly used, but it doesn't hurt doing an explicit import
      in the Sass file where you're using them.
    </p>

    <ul>
      <li>
        <reload-link to="/modules/borders">Borders</reload-link>
      </li>
      <li>
        <reload-link to="/modules/breakpoints">Breakpoints</reload-link>
      </li>
      <li>
        <reload-link to="/modules/clearfix">Clearfix</reload-link>
      </li>
      <li>
        <reload-link to="/modules/colors">Colors</reload-link>
      </li>
      <li>
        <reload-link to="/modules/converters">Converters</reload-link>
      </li>
      <li>
        <reload-link to="/modules/data-generators">Data generators</reload-link>
      </li>
      <li>
        <reload-link to="/modules/element-types">Element types</reload-link>
      </li>
      <li>
        <reload-link to="/modules/flow-rhythm">Flow rhythm</reload-link>
      </li>
      <li>
        <reload-link to="/modules/fonts">Fonts</reload-link>
      </li>
      <li>
        <reload-link to="/modules/layout">Layout</reload-link>
      </li>
      <li>
        <reload-link to="/modules/lists">Lists</reload-link>
      </li>
      <li>
        <reload-link to="/modules/responsive-locks">Responsive locks</reload-link>
      </li>
      <li>
        <reload-link to="/modules/sizing">Sizing</reload-link>
      </li>
      <li>
        <reload-link to="/modules/spacing">Spacing</reload-link>
      </li>
      <li>
        <reload-link to="/modules/strip-unit">Strip unit</reload-link>
      </li>
    </ul>

    <h2>Testing</h2>
    <figure>
      <img src="~/assets/browserstack-logo-600x315.png" class="h-5" alt="Browserstack logo">
      <figcaption>
        We're using <a href="http://browserstack.com/" target="browserstack">Browserstack</a> for testing across web
        browsers, please check out their amazing services!
      </figcaption>
    </figure>

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
</style>
