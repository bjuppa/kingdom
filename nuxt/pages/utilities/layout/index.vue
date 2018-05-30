<template>
  <main class="space-inside">
    <h1>
      <small>Utilities:</small>
      Layout
    </h1>

    <ul>
      <li><reload-link to="columns" append>Columns</reload-link></li>
    </ul>
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
