<template>
    <div class="demo">
        <iframe v-for="href in iframes" v-bind:src="href"></iframe>
    </div>
</template>

<script>
  export default {
    computed: {
      iframes() {
        let hrefs = [];
        for (let i = 1; i < 5; i++) {
          hrefs.push(this.$router.resolve(`L${i}`, null, true).href);
        }
        return hrefs;
      }
    }
  };
</script>

<style lang="scss">
    @import "~assets/demo-wrapper";
</style>