import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import functions from './utils/functions.vue'
import Tube from './components/Tube.vue'
import HelloDoge from './components/HelloDoge.vue'
import GrowerForm from './components/GrowerForm.vue'

Vue.config.productionTip = false

// test component
//const Tube = { template: 'tube' }

const routes = [
  { path: '/', component: HelloDoge },
  { path: '/tube', component: Tube },
  { path: '/grower-submission', component: GrowerForm }
]

Vue.use(VueRouter)
const router = new VueRouter({
  routes, // short for 'routes: routes'
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
