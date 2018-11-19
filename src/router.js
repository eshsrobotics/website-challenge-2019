import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      path: '/team',
      name: 'team',
      component: () => import(/* webpackChunkName: "team" */ './views/OurTeam.vue')
    },
    {
      path: '/sponsors',
      component: () => import('./views/Sponsors.vue')
    },
    {
      path: '/blog',
      component: () => import('./views/Blog.vue')
    },
    {
      path: '/resources',
      component: () => import('./views/Resources.vue')
    }
  ]
})
