<template>
    <nav class="space-inside">
        <ul class="list-inline">
            <li>
                <reload-link to="/">Main</reload-link>
            </li>
        </ul>
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