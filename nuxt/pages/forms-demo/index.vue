<template>
  <demo-iframes></demo-iframes>
</template>

<script>
  import Iframes from '~/components/demo-iframes.vue';

  export default {
    layout: 'demo',
    components: {
      'demo-iframes': Iframes
    }
  };
</script>