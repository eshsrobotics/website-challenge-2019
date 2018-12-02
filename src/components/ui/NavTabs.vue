<template>
  <ul>
    <li v-for="route in routes"> {{ route }}</li>
  </ul> 
</template>

<script>
  // Navigation tabs allow user to move between child routes of a route (such as the subpages under 'about')
  export default {
    computed: {
      routes: function() {
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
        for(let i = 0; i < currentRoutesArray.length; i++) {
          // Find all of the relevant routes (basically sibling components)
          relevantRoutes = relevantRoutes.filter(el => {
            if(el.path.includes(currentRoutesArray[i])) {
              // console.log('relveantRoutes', relevantRoutes)
              return el;
            }
          })

          // Now, get the children of this route as the new element (in a readable format), and loop over that
          // Relevant routes is an array of objects with a property of path
          relevantRoutes = relevantRoutes[0].children
        }

        // If debugging is hard (if you're seeing a bunch of prototypes in the console log prints, and not actual properties of the object),
        // comment the following line of code (and remove its presence in the DOM)
        // .map (in this context) goes through each object in the array of objects and converts it to the property meta.title of the object, converting relevantRoutes to an array of Strings, ultimately
        return relevantRoutes.map(obj => obj.meta.title);
      }
    }
  }
</script>