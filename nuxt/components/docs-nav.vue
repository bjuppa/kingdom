<template>
  <nav class="space-inside background-color-gray-100">
    <ul class="list-inline space-children-horizontally text-3">
      <li>
        <reload-link to="/" class="block py-1 color-inherit no-underline">Main</reload-link>
      </li>
      <li>
        <a href="https://github.com/bjuppa/kingdom/" target="_blank" class="block py-1 color-inherit no-underline">GitHub</a>
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
