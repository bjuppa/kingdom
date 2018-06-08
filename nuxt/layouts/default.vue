<template>
  <div class="flex flex-col h-min-viewport">
    <reload-link to="#main" relative class="sr-only-focusable inline-block mx-auto">Skip to main content<sub
      aria-hidden="true">&#8617;</sub></reload-link>
    <docs-nav></docs-nav>
    <nuxt id="main" class="flex-grow"/>
    <footer class="background-color-gray-700 mt-2 p-1 print-hidden">
      <nav class="text-center">
        <reload-link to="#main" relative class="inline-block p-1 color-inherit">
          <span aria-hidden="true">&#10224; </span>Back to top of main content<span aria-hidden="true"> &#10224;</span>
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
