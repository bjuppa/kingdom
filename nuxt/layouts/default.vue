<template>
  <div>
    <docs-nav></docs-nav>
    <a name="top"></a>
    <nuxt/>
    <div class="background-color-primary h-1 mt-3 space-inside">
      <nav class="text-center">
        <a href="#top" class="color-inherit no-underline">&uarr;Back to top of page&uarr;</a>
      </nav>
    </div>
  </div>
</template>

<script>
  import DocsNav from '~/components/docs-nav.vue';

  export default {
    components: {
      'docs-nav': DocsNav
    }
  };
</script>

<style>
  .nuxt-progress + * {
    margin-top: 0;
  }
</style>
