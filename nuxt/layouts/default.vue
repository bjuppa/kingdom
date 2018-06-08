<template>
  <div>
    <docs-nav></docs-nav>
    <a name="top"></a>
    <nuxt/>
    <div class="background-color-primary mt-3 space-inside">
      <nav class="text-center">
        <reload-link to="#top" relative class="inline-block p-1 color-inherit">&#10224; To top of page &#10224;</reload-link>
      </nav>
    </div>
  </div>
</template>

<script>
  import DocsNav from '~/components/docs-nav.vue';
  import ReloadLink from '~/components/reload-link';

  export default {
    components: {
      ReloadLink,
      'docs-nav': DocsNav
    }
  };
</script>

<style>
  .nuxt-progress + * {
    margin-top: 0;
  }
</style>
