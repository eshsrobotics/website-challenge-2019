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
      path: '/about/team',
      component: () => import('@/views/about/Team')
    },
    {
      path: '/about/coaches-and-mentors',
      component: () => import('@/views/about/CoachesAndMentors')
    },
    {
      path: '/about/officers',
      component: () => import('@/views/about/Officers')
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
      path: '/resources',
      component: () => import('@/views/resources/Resources')
    },
    {
      path: '/resources/links',
      component: () => import('@/views/resources/QuickLinks')
    },
    {
      path: '/resources/branding',
      component: () => import('@/views/resources/BrandingGuidelines')
    },
    {
      path: '/media',
      component: () => import('@/views/media/Media')
    },
    {
      path: '/media/videos',
      component: () => import('@/views/media/Videos')
    },
    {
      path: '/media/photos',
      component: () => import('@/views/media/Photos')
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
      path: '/contact',
      component: () => import('@/views/Contact')
    }
  ]
})
