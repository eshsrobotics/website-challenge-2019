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
      component: () => import('./views/About/About')
    },
    {
      path: '/cyberpatriots',
      component: () => import('./views/Cyberpatriots/CyberPatriots')
    },
    {
      path: '/frc',
      component: () => import('./views/Frc/Frc')
    },
    {
      path: '/vex',
      component: () => import('./views/Vex/Vex')
    },
    {
      path: '/sponsors',
      component: () => import('./views/Sponsors/Sponsors')
    },
    {
      path: '/blog',
      component: () => import('./views/Blog/Blog')
    },
    {
      path: '/resources',
      component: () => import('./views/Resources/Resources')
    },
    {
      path: '/media',
      component: () => import('./views/Media/Media')
    }
  ]
})
