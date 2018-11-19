import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: () => import('./views/About')
    },
    {
      path: '/cyberpatriots',
      component: () => import('./views/CyberPatriots')
    },
    {
      path: '/frc',
      component: () => import('./views/Frc')
    },
    {
      path: '/vex',
      component: () => import('./views/Vex')
    },
    {
      path: '/sponsors',
      component: () => import('./views/Sponsors')
    },
    {
      path: '/blog',
      component: () => import('./views/Blog')
    },
    {
      path: '/resources',
      component: () => import('./views/Resources')
    },
    {
      path: '/media',
      component: () => import('./views/Media')
    },
    {
      path: '/members',
      component: () => import('./views/Members')
    }
  ]
})
