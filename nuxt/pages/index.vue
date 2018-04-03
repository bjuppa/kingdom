<template>
  <div class="space-inside">
    <h1>Kingdom CSS</h1>
    <p>
      A CSS framework, written in <a href="http://sass-lang.com">Sass</a>,
      for consistent spacing, sizing and typography.
    <p>
    <blockquote>
      "If content is king, context is the kingdom"
    </blockquote>
    <p>
      Kingdom CSS consists of four "levels" to choose from,
      where each level adds some functionality on top of the previous.
      After selecting a level, there are some optional utilities and extensions available to include.
      Every import has default options, configurable with Sass variables.
    </p>

    <ol>
      <li>
        The 1st level is an opinionated <strong>CSS reset</strong>, laying a foundation for the other levels.
      </li>

      <li>
        The 2nd level applies consistent <strong>spacing</strong> between blocks
        and a scale for <strong>sizing</strong> text elements.
      </li>

      <li>
        The 3rd level adds a <strong>vertical rhythm</strong>, helping blocks to line up across columns
        by keeping line heights consistent.
      </li>

      <li>
        The 4th level makes every line of text go on a common <strong>baseline</strong>,
        making individual lines of text line up across columns, even if they're in different font sizes.
      </li>
    </ol>

    <p>
      This webpage uses Level 3 with all utilities included.
      Here only one configuration variable is set before the Kingdom level is included, choosing a primary color.
      Everything else is default, and additional colors are derived from the primary color.
    </p>

    <h2>Not for the faint of heart</h2>
    <p>
      Kingdom CSS embraces the cascade, is utility-first, has no namespacing,
      and does all kinds of other things that might seem scary and are sometimes even frowned upon.
      Not everyone will like it, and there are certainly situations where its not the best fit.
      But there is a thought behind it all, and I hope this documentation will eventually convey both the why and how of
      each realm within the Kingdom.
    </p>

    <h2>Testing</h2>
    <figure>
      <img src="~/assets/browserstack-logo-600x315.png" class="h-5" alt="Browserstack logo">
      <figcaption>
        We're using <a href="http://browserstack.com/">Browserstack</a> for testing across web browsers,
        please check out their amazing services!
      </figcaption>
    </figure>

    <h2>Demos</h2>
    <p>
      The demo pages are set up with no options at all, meaning they even generate a random primary color.
      To see an example of all four levels of Kingdom side by side, you can visit <nuxt-link to="/demo">the demo page</nuxt-link>.
      The form extension can be seen in action on <nuxt-link to="/forms-demo">the forms demo page</nuxt-link>.
    </p>

  </div>
</template>

<style lang="scss">
  @import "~assets/_variables.scss";
  @import "~assets/L3.scss";
</style>