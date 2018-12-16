<template>
  <ul>
    <li v-for="(routeObject, index) in routeObjects" :class="isRouteActive(index)">
      <router-link :to="routeObjectsPath[index]">
        <!-- <nav-bar-item :routeTo="routeObjectsPath[index]"> -->
          {{ routeObject.meta.title }}
        <!-- </nav-bar-item> -->
      </router-link>
    </li>
  </ul> 
</template>

<script>
import NavBarItem from '@/components/nav/NavbarItem.vue'

  // Navigation tabs allow user to move between child routes of a route (such as the subpages under 'about')
  export default {
    name: 'navTabs',
    methods: {
      getRelevantRoutes: function() {
        // Get the array of path of current route 
        // .split separates the string and converted it into array, separating each element by a '/'
        // .filter iterates each element in array and only keeps that element if it satisfies the confitional (el !== '')
        // .slice (in this context) removes the last element from the array
        let currentRoutesArray = this.$route.path.split('/').filter(el => {
          return el !== ''
        }).slice(0, -1)

        // The currentRoute array would be zero if we are on a route that has child components
        // Ex. '/about' will have child components '/about/team', '/about/website', etc. If we are on '/about/team' currentRoutesArray would be ['about'], but if we are on '/about' current
        //     route array would be empty
        // This fixes issue of empty array and makes it 'about' like it should
        if(currentRoutesArray.length == 0) {
          currentRoutesArray.push(this.$route.path.slice(1))
        }

        // Parts to current path
        // console.log('currentRoutesArray', currentRoutesArray)
        
        // Go through the routes tree to find all sibling rotes (or child routes if you are on the parent route (ex. if you are on '/about' (rather than '/about/website'), still show the same thing as '/about/website'))
        let relevantRoutes = this.$router.options.routes;
        // console.warn(relevantRoutes)
        for(let i = 0; i < currentRoutesArray.length; i++) {
          // Find all of the relevant routes (basically sibling components)
          relevantRoutes = relevantRoutes.filter(el => {
            if(el.path.includes(currentRoutesArray[i])) {
              // console.log('relveantRoutes', relevantRoutes)
              return el
            }
          })

          // Now, get the children of this route as the new element (in a readable format), and loop over that
          // Relevant routes is an array of objects with a property of path
          // console.log(relevantRoutes)
          relevantRoutes = relevantRoutes[0].children
        }

        // If debugging is hard (if you're seeing a bunch of prototypes in the console log prints, and not actual properties of the object),
        // comment the following line of code (and remove its presence in the DOM)
        // .map (in this context) goes through each object in the array of objects and converts it to the property meta.title of the object, converting relevantRoutes to an array of Strings, ultimately
        return relevantRoutes
      },
      isRouteActive: function(index) {
        // console.log(this.$route)
        // console.warn(this.routeObjectsPath[index])
        if(this.routeObjectsPath[index] === this.$route.path) {
          // If the route is active, set a class of 'route-active', which will be bolded, etc. so user knows the current page
          return 'route-active'
        }
        return 'route-not-active'
      }
    },
    computed: {
      routeObjects: function() {
        return this.getRelevantRoutes()
      },
      // Recall that for every route change, this routeObjectPath is re-created every single time, at minimum dependent on this.$route
      routeObjectsPath: function() {
        let relativeRoutes = this.getRelevantRoutes()
        // console.log('relativeRoutes', relativeRoutes)

        // Convert the abolute routes (ex. ['', 'coaches']) to absolute routes (starting from root of path) (ex. ['/about', '/about/coaches'])
        // Could use es6 object destructuring when passing in param to anon func, but don't, easier to understand for new contributers
        let absoluteRoutes = relativeRoutes.map(obj => {
          let relativePath = obj.path;
         
          // Make sure that if route does not have child components, we do not want to add a slash at the end
          if(relativePath == "") {
            // Do not need to prepend anything
            let prepend = this.$route.matched.map(obj => obj.path)
            let absolutePath = prepend[prepend.length -2]
            // console.log('if', absolutePath)
            return absolutePath
          }
          
          // Find the values to prepend to the relativeRoutes
          let prepend = this.$route.path.split('/').filter(el => el !== '')
          if(prepend.length > 1) {
            prepend = prepend.slice(0, -1)
          }
          prepend = prepend.join('/')
          // console.warn('prepend', prepend)

          let absolutePath = '/' + prepend + '/' + relativePath
          // console.log('else', absolutePath)
          return absolutePath
        })

        // console.log(absoluteRoutes)
        return absoluteRoutes
      }
    },
    components: {
      'nav-bar-item': NavBarItem
    }
  }
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

ul {
  display: flex;
  list-style-type: none;
}
li {
  padding: 5px;
}

.route-active a {
  font-weight: bold;
  background-color: $oc-gray-3;
  background-color: $oc-yellow-1;
  transition: createTransitions((all));
}

a {
  text-decoration: none;
  border: 1px solid $oc-gray-7;
  padding: 4px;
  border-radius: $border-radius-small;
  background-color: $std-bg-reg;
  transition: createTransitions((all));

  &:hover {
    cursor: pointer;
    background-color: $oc-blue-1;
    transition: createTransitions((all));
  }
}

</style>