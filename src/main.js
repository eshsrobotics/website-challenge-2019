import Vue from 'vue'
import VueRouter from 'vue-router'
import InfiniteSlideBar from '@/components/infinite-slide-bar/src/index'
// import VueProgressBar from 'vue-progressbar'
// import 'nprogress/nprogress.css'
// import 'nprogress/nprogress'
import root from './Root.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('InfiniteSlideBar', InfiniteSlideBar)
// Vue.use(VueProgressBar, {
//   color: 'black',
//   failedColor: 'red',
//   height: '10px'
// })

new Vue({
  router,
  store,
  render: h => h(root)
}).$mount('#root')
