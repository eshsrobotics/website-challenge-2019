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
          path: 'team',
          component: () => import('@/views/about/Team'),
          meta: {
            title: 'Team'
          }
        },
        {
          path: 'join-us',
          component: () => import('@/views/about/JoinUs'),
          meta: {
            title: 'Join Us'
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
      path: '/photos',
      component: () => import('@/views/media/Photos'),
      meta: {
        title: 'Photos'
      }
    },
    {
      path: '/album/:album',
      component: () => import('@/views/media/Album'),
      meta: {
        title: 'Album Photos',
        showRoute: false
      }
    },
    {
      path: '/resources',
      component: () => import('@/components/SubPathWrapper'),
      children: [
        // {
        //   path: '',
        //   component: () => import('@/views/resources/Resources'),
        //   meta: {
        //     title: 'Resources'
        //   }
        // },
        // {
        //   path: 'branding',
        //   component: () => import('@/views/resources/BrandingGuidelines'),
        //   meta: {
        //     title: 'Branding Guidelines'
        //   }
        // },
        // {
        //   path: 'photos',
        //   component: () => import('@/views/media/Photos'),
        //   meta: {
        //     title: 'Photos'
        //   }
        // },
        // {
        //   path: 'album/:album',
        //   component: () => import('@/views/media/Album'),
        //   meta: {
        //     title: 'Album Photos',
        //     showRoute: false
        //   }
        // },
        // {
        //   path: 'videos',
        //   component: () => import('@/views/media/Videos'),
        //   meta: {
        //     title: 'Videos'
        //   }
        // },
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
    },
    {
      path: '/image/:image',
      component: () => import('@/views/EnlargedImage'),
      meta: {
        title: 'View Image'
      }
    },
    {
      path: '/404',
      component: () => import('@/views/404'),
      meta: {
        title: '404'
      }
    },
    {
      path: '*',
      component: () => import('@/views/404'),
      meta: {
        title: '404'
      },
    },
  ],
  //
  // beforeResolve((to, from, next) => {
  //   if(to.path) {
  //     NProgress.start()
  //     next()
  //   }
  // })
})