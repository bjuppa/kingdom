<template>
  <main class="space-inside">
    <h1>
      <small>Utilities:</small>
      Layout
    </h1>

    <ul>
      <li><reload-link to="box-alignment" append>Box alignment</reload-link></li>
      <li><reload-link to="breaks" append>Breaks</reload-link></li>
      <li><reload-link to="columns" append>Columns</reload-link></li>
      <li><reload-link to="display" append>Display</reload-link></li>
      <li><reload-link to="flexbox" append>Flexbox</reload-link></li>
      <li><reload-link to="floats" append>Floats</reload-link></li>
      <li><reload-link to="grid" append>Grid</reload-link></li>
      <li><reload-link to="lists" append>Lists</reload-link></li>
      <li><reload-link to="overflow" append>Overflow</reload-link></li>
      <li><reload-link to="position" append>Position</reload-link></li>
      <li><reload-link to="screenreaders" append>Screenreaders</reload-link></li>
      <li><reload-link to="visibility" append>Visibility</reload-link></li>
      <li><reload-link to="z-index" append>Z-index</reload-link></li>
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
