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
            <input type="text" v-model="sampleSize" />
            {{this.sampleSize}}
        </p>
        <p>
            Date
            <datepicker v-model="thedate" placeholder="select test date" />
            {{this.thedate}}
        </p>
        <p>
            Laboratory
            <input type="text" v-model="lab" />
            {{this.lab}}
        </p>
        <p>
            Method
            <input type="text" v-model="method" />
            {{this.method}}
        </p>
        <p>
            Range
            <input type="text" v-model="range" />
            {{this.range}}
        </p>
        <p>
            Result (D9-THC)
            <input type="text" v-model="result" />
            {{this.result}}
        </p>
        <p>
            Valid Until date+14 (+14 days from sample date)
        </p>
        <h3>
            Harvest information
        </h3>
        <p>
            Size (actual)
            <input type="text" v-model="harvestSize" />
            {{this.harvestSize}}
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
    import Datepicker from 'vuejs-datepicker'
    export default {
        name: 'GrowerForm',
        components: {
            Datepicker
        },
        data() {
            return {
                sampleSize: '',
                thedate: '',
                lab: '',
                method: '',
                range: '',
                result: '',
                harvestSize: '',
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