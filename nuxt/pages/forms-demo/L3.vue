<template>
  <demo></demo>
</template>

<script>
  import Demo from '~/components/forms-demo.vue';

  export default {
    layout: 'demo',
    components: {
      Demo
    }
  }
</script>

<style lang="scss">
  @import "~assets/L3.scss";
  @import "../../../src/extensions/forms";
</style>
