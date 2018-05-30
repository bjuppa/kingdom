<template>
  <main class="space-inside">
    <h1>
      <small>Layout utilities:</small>
      Columns
    </h1>
    <div class="columns-readable breaks-readable">
      <p>
        In supporting browsers, CSS column layouts can be created using the utility classes from
        <a href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/layout/_columns.scss"
           target="_blank"><code>src/utilities/layout/_columns.scss</code></a>.
      </p>
      <p>
        Most of the column utility classes are wrapped in <code>@supports (column-span: all)</code> to make sure columns
        are not applied in browsers supporting some but not all the column properties required for a good user
        experience (currently Firefox).
      </p>
      <p>
        This block has class <code>columns-readable</code> applied, making it add columns of a minimum readable
        line-length, as long as there is available width.
        In browsers not supporting columns, the block will have a fallback applying a readable max-width.
      </p>
      <p>
        This block also has class <code>breaks-readable</code> from the <reload-link to="breaks">breaks
        utilities</reload-link> which set the number of orphan lines roughly corresponding to that minimum line-length.
        It's useful in situations where the contents would otherwise be split up in many very short columns because of
        the available width.
        The effect is that any paragraph shorter than the column is wide will be not break over two columns.
      </p>
    </div>
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
