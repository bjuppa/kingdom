<template>
  <main class="space-inside">
    <h1>
      <small>Module:</small>
      Breakpoints
    </h1>
    <p>
      Coming soon
    </p>
    <p class="current-device-breakpoint">
      Current device breakpoint:
    </p>
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
  @import "../../../src/modules/breakpoints";

  /* Demo classes using breakpoint mixins */

  .current-device-breakpoint:after {
    content: 'n/a';

    @include for-phone-only {
      content: 'phone';
    }
    @include for-tablet-portrait-up {
      content: 'tablet-portrait';
    }
    @include for-tablet-landscape-up {
      content: 'tablet-landscape';
    }
    @include for-desktop-up {
      content: 'desktop';
    }
    @include for-big-desktop-up {
      content: 'big-desktop';
    }
  }
</style>
