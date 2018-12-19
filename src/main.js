import Vue from 'vue'
import root from './Root.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(root)
}).$mount('#root')
