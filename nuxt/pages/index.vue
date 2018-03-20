<template>
  <div>
    <h1>Hello world!</h1>
    <p>Intro...</p>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Test title',
        link: [
          { rel: 'stylesheet', href: 'test.css' }
        ]
      }
    }
  }
</script>
