<template>
  <div id="app" class="small-container">
    <h1>🐕🐕🐕🐕🐕 Finest Shibes 🐕🐕🐕🐕🐕</h1>

      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/tube">TubePage</router-link>
         <router-link to="/grower-submission">GrowerSubmissionForm</router-link>
      </nav>
<router-view />
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
