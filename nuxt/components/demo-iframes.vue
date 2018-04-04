<template>
    <div class="demo">
        <iframe v-for="url in iframes" v-bind:src="url"></iframe>
    </div>
</template>

<script>
  export default {
    computed: {
      iframes () {
        let hrefs = [];
        for (let i = 1; i < 5; i++) {
          hrefs.push(this.$router.resolve(`L${i}/`, null, true).href);
        }
        return hrefs;
      }
    }
  };
</script>

<style lang="scss">
    @import "~assets/L1";
</style>

<style lang="scss" scoped>
    /* Position the demo iframes */
    .demo {
        display: flex;
        height: 100%;
        height: 100vh;

        > * {
            height: 100%;
            min-width: 20rem;
            max-width: 90vw;
            flex: 1 1 auto;
        }
    }
</style>