<template>
  <nav class="space-inside background-color-gray-500 baseline-shift-off">
    <ul class="list-inline space-children-horizontally text-3-block font-headings font-thin mt-0">
      <li>
        <reload-link to="/" class="block p-1 color-inherit no-underline">Main</reload-link>
      </li>
      <li>
        <reload-link to="/level-1-reset"
                     class="block py-1 color-inherit no-underline">L1</reload-link>
      </li>
      <li>
        <reload-link to="/level-2-sizing"
                     class="block py-1 color-inherit no-underline">L2</reload-link>
      </li>
      <li>
        <reload-link to="/level-3-rhythm"
                     class="block py-1 color-inherit no-underline">L3</reload-link>
      </li>
      <li>
        <reload-link to="/level-4-baseline"
                     class="block py-1 color-inherit no-underline">L4</reload-link>
      </li>
      <li>
        <reload-link to="/demo" target="basic-demo"
                     class="block p-1 color-inherit no-underline">Demo</reload-link>
      </li>
      <li class="float-right">
        <a href="https://github.com/bjuppa/kingdom/" target="_blank"
           class="block p-1 color-inherit no-underline">GitHub</a>
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


<style>
  a[aria-current="page"] {
    text-decoration: underline;
  }
</style>
