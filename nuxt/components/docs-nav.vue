<template>
  <nav class="space-inside">
    <ul class="list-inline space-children-horizontally">
      <li>
        <reload-link to="/">Main</reload-link>
      </li>
      <li>
        <a href="https://github.com/bjuppa/kingdom/" target="_blank">GitHub</a>
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
