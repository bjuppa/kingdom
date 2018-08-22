<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Utilities:</small>
      Sizing
    </h1>
    <p>
      A collection of classes for setting length related properties.
      Which classes that are actually generated can be controlled by setting Sass variables.
      Check the source of <a href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/_sizing.scss"
                             target="_blank"><code>src/utilities/_sizing.scss</code></a> to see what can be configured.
    </p>

    <h2>Heights (vertical sizing)</h2>
    <p>
      Use classes <code>h-<var>n</var></code> for heights that are multiples (<var>n</var>) of the spacing base.
    </p>
    <aside class="h-3 border space-inside">
      For example, this element has class <code>h-3</code> applied and should take up three "lines" of vertical space.
    </aside>
    <p>
      For setting a one-pixel height there's class <code>h-px</code>, that will also set
      <code>margin-bottom:&nbsp;-1px;</code> to avoid breaking the vertical rhythm.
    </p>

    <h2>Widths (horizontal sizing)</h2>
    <p>
      Horizontally there's classes <code>w-<var>n</var></code> for widths that are multiples (<var>n</var>) of the
      spacing base.
      But as we don't need to care about the vertical rhythm, some fractional width classes like <code>w-1/2</code>
      are available too.
    </p>
    <aside class="w-8 border space-inside">
      For example, this element has class <code>w-8</code> applied and should take upp eight "lines" of horizontal
      space.
    </aside>

    <h3>Limiting line lengths</h3>
    <p>
      For good readability it's recommended to keep lines of text between 45 and 85 characters long on screens.
      Class <code>w-readable</code> will apply such a <code>max-width</code> to an element, while classes
      <code>children:w-readable</code> and <code>paragraphs:w-readable</code> will apply to elements within.
      This documentation uses the latter to allow headings, lists, and other blocks to be wider, while keeping the
      body text easy to follow.
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
</style>
