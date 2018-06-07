<template>
  <a v-bind:href="href" v-bind:aria-current="current">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      to: {
        required: true
      },
      append: Boolean
    },
    computed: {
      route () {
        return this.$router.resolve(this.to, this.$route, this.append);
      },
      href () {
        return this.route.href;
      },
      current () {
        return this.$route.fullPath == this.href ? 'page' : false;
      }
    }
  };
</script>
