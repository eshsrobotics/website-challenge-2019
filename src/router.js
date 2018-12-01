import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/about',
      component: () => import('@/views/about/About'),
      name: 'About'
    },
    {
      path: '/about/team',
      component: () => import('@/views/about/Team'),
      name: 'Team'
    },
    {
      path: '/about/coaches-and-mentors',
      component: () => import('@/views/about/CoachesAndMentors'),
      name: 'Coaches and Mentors'
    },
    {
      path: '/about/officers',
      component: () => import('@/views/about/Officers'),
      name: 'Officers'
    },
    {
      path: '/about/website',
      component: () => import('@/views/about/Website'),
      name: 'Website'
    },
    {
      path: '/cyberpatriots',
      component: () => import('@/views/cyberpatriots/CyberPatriots'),
      name: 'CyberPatriots'
    },
    {
      path: '/cyberpatriots/info',
      component: () => import('@/views/cyberpatriots/CyberPatriots'),
      name: 'Info'
    },
    {
      path: '/frc',
      component: () => import('@/views/frc/Frc'),
      name: 'FRC'
    },
    {
      path: '/vex',
      component: () => import('@/views/vex/Vex'),
      name: 'VEX'
    },
    {
      path: '/resources',
      component: () => import('@/views/resources/Resources'),
      name: 'Resources'
    },
    {
      path: '/resources/links',
      component: () => import('@/views/resources/QuickLinks'),
      name: 'Links'
    },
    {
      path: '/resources/branding',
      component: () => import('@/views/resources/BrandingGuidelines'),
      name: 'Branding'
    },
    {
      path: '/media',
      component: () => import('@/views/media/Media'),
      name: 'Media'
    },
    {
      path: '/media/videos',
      component: () => import('@/views/media/Videos'),
      name: 'Videos'
    },
    {
      path: '/media/photos',
      component: () => import('@/views/media/Photos'),
      name: 'Photos'
    },
    {
      path: '/sponsors',
      component: () => import('@/views/sponsors/Sponsors'),
      name: 'Sponsors'
    },
    {
      path: '/blog',
      component: () => import('@/views/blog/Blog'),
      name: 'Blog'
    },
    {
      path: '/contact',
      component: () => import('@/views/Contact'),
      name: 'Contact'
    }
  ]
})
