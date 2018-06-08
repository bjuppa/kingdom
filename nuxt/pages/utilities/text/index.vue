<template>
  <main class="space-inside">
    <h1>
      <small>Utilities:</small>
      Text
    </h1>

    <ul>
      <li><reload-link to="antialias" append>Antialias</reload-link></li>
      <li><reload-link to="decoration" append>Decoration</reload-link></li>
      <li><reload-link to="font" append>Font</reload-link></li>
      <li><reload-link to="letter-spacing" append>Letter-spacing</reload-link></li>
      <li><reload-link to="sizing" append>Sizing</reload-link></li>
      <li><reload-link to="style" append>Style</reload-link></li>
      <li><reload-link to="text-align" append>Text-align</reload-link></li>
      <li><reload-link to="transform" append>Transform</reload-link></li>
      <li><reload-link to="vertical-align" append>Vertical-align</reload-link></li>
      <li><reload-link to="weight" append>Weight</reload-link></li>
      <li><reload-link to="whitespace-wrapping" append>Whitespace-wrapping</reload-link></li>
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
