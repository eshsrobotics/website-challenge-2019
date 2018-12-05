<template>
  <div class="page-heading">
    <div class="nav">
      <h1> {{ $route.meta.title }} </h1>
      <nav-tabs class="nav-tabs"/>
    </div>
    <hr>
  </div>
</template>

<script>
import navTab from '@/components/ui/NavTabs.vue'

export default {
  name: 'pageHeading',
  components: {
    'nav-tabs': navTab
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

h1 {
  display: inline;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

}

.page-heading {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}
</style>