<template>
    <nav>
        <reload-link to="/">Main</reload-link>
    </nav>
</template>

<script>
  import ReloadLink from '~/components/reload-link.vue';

  export default {
    components: {
      'reload-link': ReloadLink
    }
  };
</script>