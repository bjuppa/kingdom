<template>
    <div class="demo">
        <iframe v-for="url in iframes" v-bind:src="url"></iframe>
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