<template>
  <div id="GrowerForm">
        <h2>
          🐶🐶🐶 Hello Grower 🐶🐶🐶
        </h2>
        <form id="submission" @submit.prevent="handleSubmit">
        <!-- Please enter the information for your crop -->
        <p>
            <input type="text" v-model="msg" />
            {{this.msg}}
        </p>
        <div>
            <h2>submit</h2>
            <input type="submit" value="Submit" />
        </div>
      </form>
  </div>
</template>

<script>
    export default {
        name: 'GrowerForm',
        data() {
            return {
                msg: ''
            }
        },
        methods: {
            handleSubmit() {
                console.log(this.msg)
            }
        }
    }

</script>

<style scoped></style>