import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'E.S.H.S. Robotics Club'
      }
    },
    {
      path: '/about',
      component: () => import('@/views/about/AboutWrapper'),
      children: [
        {
          path: '',
          component: () => import('@/views/about/About'),
          meta: {
            title: 'About'
          }
        },
        {
          path: 'team',
          component: () => import('@/views/about/Team'),
          meta: {
            title: 'Team'
          }
        },
        {
          path: 'coaches-and-mentors',
          component: () => import('@/views/about/CoachesAndMentors'),
          meta: {
            title: 'Coaches & Mentors'
          }
        },
        {
          path: 'officers',
          component: () => import('@/views/about/Officers'),
          meta: {
            title: 'Officers'
          }
        },
        {
          path: 'website',
          component: () => import('@/views/about/Website'),
          meta: {
            title: 'Website'
          }
        }
      ]
    },
    {
      path: '/cyberpatriots',
      component: () => import('@/views/cyberpatriots/CyberPatriots'),
      meta: {
        title: 'CyberPatriots'
      }
    },
    {
      path: '/cyberpatriots/info',
      component: () => import('@/views/cyberpatriots/CyberPatriots'),
      name: 'Info'
    },
    {
      path: '/frc',
      component: () => import('@/views/frc/Frc'),
      meta: {
        title: 'FRC'
      }
    },
    {
      path: '/vex',
      component: () => import('@/views/vex/Vex'),
      meta: {
        title: 'VEX'
      }
    },
    {
      path: '/resources',
      component: () => import('@/views/resources/ResourcesWrapper'),
      children: [
        {
          path: '',
          component: () => import('@/views/resources/Resources'),
          meta: {
            title: 'Resources'
          }
        },
        {
          path: 'links',
          component: () => import('@/views/resources/QuickLinks'),
          meta: {
            title: 'Quick Links'
          }
        },
        {
          path: 'branding',
          component: () => import('@/views/resources/BrandingGuidelines'),
          meta: {
            title: 'Branding Guidelines'
          }
        }
      ]
    },
    {
      path: '/media',
      component: () => import('@/views/media/MediaWrapper'),
      children: [
        {
          path: '',
          component: () => import('@/views/media/Media'),
          meta: {
            title: 'Media'
          }
        },
        {
          path: 'videos',
          component: () => import('@/views/media/Videos'),
          meta: {
            title: 'Videos'
          }
        },
        {
          path: 'photos',
          component: () => import('@/views/media/Photos'),
          meta: {
            title: 'Photos'
          }
        },
      ]
    },
    {
      path: '/sponsors',
      component: () => import('@/views/sponsors/Sponsors'),
      meta: {
        title: 'Sponsors'
      }
    },
    {
      path: '/blog',
      component: () => import('@/views/blog/Blog'),
      meta: {
        title: 'Blog'
      }
    },
    {
      path: '/contact',
      component: () => import('@/views/Contact'),
      meta: {
        title: 'Contact'
      }
    }
  ]
})
