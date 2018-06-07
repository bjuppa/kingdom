<template>
    <div>
        <docs-nav></docs-nav>
        <nuxt/>
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
