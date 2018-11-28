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
      component: () => import('@/views/about/About' )
    },
    {
      path: '/about/website',
      component: () => import('@/views/about/Website')
    },
    {
      path: '/cyberpatriots',
      component: () => import('@/views/cyberpatriots/CyberPatriots')
    },
    {
      path: '/cyberpatriots/info',
      component: () => import('@/views/cyberpatriots/CyberPatriots')
    },
    {
      path: '/frc',
      component: () => import('@/views/frc/Frc')
    },
    {
      path: '/vex',
      component: () => import('@/views/vex/Vex')
    },
    {
      path: '/sponsors',
      component: () => import('@/views/sponsors/Sponsors')
    },
    {
      path: '/blog',
      component: () => import('@/views/blog/Blog')
    },
    {
      path: '/resources',
      component: () => import('@/views/resources/Resources')
    },
    {
      path: '/media',
      component: () => import('@/views/media/Media')
    }
  ]
})
