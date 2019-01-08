<template>
  <page-desc>
    <h1>Page Not Found</h1>
    <p>Sorry your link was not found.</p>
    <br><br>
    <p>Learn about the Robotics Competition while you're here!</p>
    <router-link to="/">
      <c-button>Learn More</c-button>
    </router-link>
  </page-desc>
</template>

<script>
import CButton from '@/components/ui/CButton'
import PageDesc from '@/components/PageDescription'

export default {
  name: "404",
  components: {
    'c-button': CButton,
    'page-desc': PageDesc,
  }
}
</script>

<style scoped lang="scss">

</style>