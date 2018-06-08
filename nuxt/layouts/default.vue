<template>
  <div>
    <reload-link to="#main" relative class="sr-only-focusable inline-block mx-1/4">Skip to main content</reload-link>
    <docs-nav></docs-nav>
    <nuxt id="main"/>
    <footer class="background-color-primary mt-3 space-inside">
      <nav class="text-center">
        <reload-link to="#main" relative class="inline-block p-1 color-inherit">
          &#10224; Back to top of main content &#10224;
        </reload-link>
      </nav>
    </footer>
  </div>
</template>

<script>
  import DocsNav from '~/components/docs-nav.vue';
  import ReloadLink from '~/components/reload-link';

  export default {
    components: {
      ReloadLink,
      DocsNav
    }
  };
</script>

<style>
  .nuxt-progress + * {
    margin-top: 0;
  }
</style>
