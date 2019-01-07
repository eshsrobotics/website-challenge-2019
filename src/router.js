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
        title: 'El Segundo High School Robotics Club'
      }
    },
    {
      path: '/about',
      component: () => import('@/components/SubPathWrapper'),
      children: [
        {
          path: '',
          component: () => import('@/views/about/About'),
          meta: {
            title: 'About'
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
      component: () => import('@/components/SubPathWrapper'),
      children: [
        {
          path: '',
          component: () => import('@/views/resources/Resources'),
          meta: {
            title: 'Resources'
          }
        },
        {
          path: 'branding',
          component: () => import('@/views/resources/BrandingGuidelines'),
          meta: {
            title: 'Branding Guidelines'
          }
        },
        {
          path: 'photos',
          component: () => import('@/views/media/Photos'),
          meta: {
            title: 'Photos'
          }
        },
        {
          path: 'album/:album',
          component: () => import('@/views/media/Album'),
          meta: {
            title: 'Album Photos',
            showRoute: false
          }
        },
        {
          path: 'videos',
          component: () => import('@/views/media/Videos'),
          meta: {
            title: 'Videos'
          }
        },
      ]
    },
    {
      path: '/sponsors',
      component: () => import('@/components/SubPathWrapper'),
      children: [
        {
          path: '',
          component: () => import('@/views/sponsors/Sponsors'),
          meta: {
            title: 'Sponsors'
          }
        },
        {
          path: 'us',
          component: () => import('@/views/sponsors/SponsorUs'),
          meta: {
            title: 'Sponsor Us'
          }
        }
      ]
    },
    {
      path: '/sponsor-us',
      redirect: '/sponsors/us'
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
