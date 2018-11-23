<template>
<ul>
  <li v-for="(urlSeg, index) in pathsArray" :key="urlSeg">
    <router-link :to="getPath(urlSeg)"><p>{{ urlSeg }}</p></router-link>
    <p v-if="index !== pathsArray.length -1 " class="separator"> ></p>
  </li>
</ul>
 
</template>

<script>
export default {
  methods: {
    redirectUser: function(urlSeg) {
      this.$router.push(this.getPath(urlSeg))
    },
    // Purpose: Returns the path from a url path segment
    // Helpful when going from a deep link to a parent one several times up
    // Ex. Converts 'Website' to '/about/website' and 'About' to '/about'
    getPath: function(urlSeg) {
      let route = this.$route.path

      // Gets the url segment (which is one element of the pathsArray) and makes it lower case
      // Ex 'About' to 'about'
      urlSeg = urlSeg.toLowerCase()

      // 'Gets the point where urlSegment is part of the route
      // Ex. for urlSeg = about, converts '/about/website' to n, with n being the element where the subString 'about' starts
      let urlSegLocation = route.indexOf(urlSeg)
      // Only use the route up until before we see the urlSegment
      // Ex. for route = '/about/website' and urlSeg = about, we will get '/about' in this step
      // Ex. for route = '/about/website' and urlSeg = website, we will get '/about/website' in this step
      let newUrlSeg = route.slice(0, urlSegLocation +  urlSeg.length)
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

  p {
    display: inline;
  }
</style>