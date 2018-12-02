<template>
  <div>
    <div class="nav">
      <h1> {{ $route.meta.title }} </h1>
      <nav-tabs class="nav-tabs"/>
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
@import '@/styles/variables.scss';

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
 
</style>