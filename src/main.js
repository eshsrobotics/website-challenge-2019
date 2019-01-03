import Vue from 'vue'
import VueRouter from 'vue-router'
import root from './Root.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(root)
}).$mount('#root')
