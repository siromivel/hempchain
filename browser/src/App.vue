<template>
  <div id="app" class="small-container">
    <h1>🐕🐕🐕🐕🐕 Finest Shibes 🐕🐕🐕🐕🐕</h1>

    <hello-doge />
  </div>
</template>

<script>
  import HelloDoge from './components/HelloDoge.vue'

  export default {
    name: 'app',
    components: {
      HelloDoge,
    },
  }
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }
</style>
