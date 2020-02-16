<template>
  <div id="GrowerForm">
        <h2>
          🐶🐶🐶 Hello Grower 🐶🐶🐶
        </h2>
        <h3>
            Please enter the information for your crop sample
        </h3>
        <form id="submission" @submit.prevent="handleSubmit">
        <p>
            Size
            <input type="text" v-model="msg" />
            {{this.msg}}
        </p>
        <p>
            Date
            <input type="text" v-model="msg" />
            {{this.msg}}
        </p>
        <p>
            Laboratory
            <input type="text" v-model="msg" />
            {{this.msg}}
        </p>
        <p>
            Method
            <input type="text" v-model="msg" />
            {{this.msg}}
        </p>
        <p>
            Range
            <input type="text" v-model="msg" />
            {{this.msg}}
        </p>
        <p>
            Result (D9-THC)
            <input type="text" v-model="msg" />
            {{this.msg}}
        </p>
        <p>
            Valid Until
            <input type="text" v-model="msg" />
            {{this.msg}}
        </p>
        <h3>
            Harvest information
        </h3>
        <p>
            Size (actual)
            <input type="text" v-model="msg" />
            {{this.msg}}
        <p>
            Pass
            <select v-model="pass" >
            <option value='Yes'>Yes </option>
            <option value='No'>No</option>
            </select>
            {{pass}}
        </p>
        <p>
            Destroyed
            <select v-model="destroyed" >
            <option value='Yes'>Yes </option>
            <option value='No'>No</option>
            </select>
            {{destroyed}}
        </p>
        <p>
            Sold
            <select v-model="sold" >
            <option value='Yes'>Yes </option>
            <option value='No'>No</option>
            </select>
            {{sold}}
        </p>
        <p>
            Shipped
            <select v-model="shipped" >
            <option value='Yes'>Yes </option>
            <option value='No'>No</option>
            </select>
            {{shipped}}
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
                msg: '',
                pass: 'No',
                destroyed: 'No',
                sold: 'No',
                shipped: 'No'
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