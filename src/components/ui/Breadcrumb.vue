<template>
<ul>
  <li v-for="urlSeg in pathsArray">
    <p>{{ urlSeg }}</p>
    <p>{{ getPath(urlSeg) }}</p>
  </li>
</ul>
 
</template>

<script>
export default {
  methods: {
    // Purpose: Returns the path from a url path segment
    // Helpful when going from a deep link to a parent one several times up
    // Ex. Converts 'Website' to '/about/website' and 'About' to '/about'
    getPath: function(urlSeg) {
      let route = this.$route.path

      urlSeg = urlSeg.toLowerCase()
      let point = route.indexOf(urlSeg)
      
      let newUrlSeg = route.slice(0, point)

      newUrlSeg = newUrlSeg + urlSeg
      return newUrlSeg;
    }
  },
  computed: {
    // Purpose: Returns the array of breadcrumbs from the current path (see examples below)
    // Ex. Converts '/about/website' to "['About', 'Website']"
    pathsArray: function() {
      let route = this.$route.path
      
      // Splits the current route (ex. /about/website) and turns it into an array, w/ elements separated by '/'
      // Ex. Converts '/about/website' to "['', about', '', 'website']")
      let routeArray = route.split("/")
      
      // Filter the array such that any elements that aren't empty are kept
      // i.e. Remote empty elements from array
      // Ex. Converts '/about/website' to "[about', 'website']")
      let routeArrayFiltered = routeArray.filter(str => {
        return str !== ''
      })

      // For every element in the array, capitalize the first letter of the String
      // str.slice is similar to str.substring, without the quirks (which we are not exploiting)
        // Ex. Converts '/about/website' to "[About', 'Website']")
      let routeArrayFiltered2 = routeArrayFiltered.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1)
      })

      return routeArrayFiltered2
    }
  }
}
</script>

<style scoped lang="scss">
  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    padding: 5px;
  }
</style>