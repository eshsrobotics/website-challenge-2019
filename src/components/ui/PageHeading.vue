<template>
  <div>
    <div>
      <h1> {{ $route.name }} </h1>
      <nav-tabs/>
    </div>
  </div>
</template>

<script>
import navTab from '@/components/ui/NavTabs.vue'

export default {
  name: 'PageHeading',
  components: {
    'nav-tabs': navTab
  }
}
</script>

<style scoped lang="scss">
  
</style>