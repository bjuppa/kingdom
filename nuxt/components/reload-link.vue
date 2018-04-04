<template>
    <a v-bind:href="href">
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
      href () {
        return this.$router.resolve(this.to, this.$route, this.append).href;
      }
    }
  };
</script>