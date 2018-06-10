<template>
  <nav class="space-inside background-color-primary baseline-shift-off clearfix flex text-3-block font-headings font-thin my-0">
    <ul class="list-inline float-left space-children-horizontally my-0">
      <li>
        <reload-link to="/" class="block p-1 no-underline">Main</reload-link>
      </li>
      <li>
        <reload-link to="/level-1-reset" title="Level 1"
                     class="block py-1 no-underline">L1</reload-link>
      </li>
      <li>
        <reload-link to="/level-2-sizing" title="Level 2"
                     class="block py-1 no-underline">L2</reload-link>
      </li>
      <li>
        <reload-link to="/level-3-rhythm" title="Level 3"
                     class="block py-1 no-underline">L3</reload-link>
      </li>
      <li>
        <reload-link to="/level-4-baseline" title="Level 4"
                     class="block py-1 no-underline">L4</reload-link>
      </li>
      <li>
        <reload-link to="/demo" target="basic-demo"
                     class="block p-1 no-underline">Demo</reload-link>
      </li>
    </ul>
    <a href="https://github.com/bjuppa/kingdom/" target="_blank"
       class="block float-right ml-auto p-1 no-underline">GitHub</a>
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


<style scoped>
  a[aria-current="page"] {
    text-decoration: underline;
  }
</style>
