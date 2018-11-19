<template>
  <div id="app">
    <div id="app-inner">
      <Navigation/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navbar.vue'
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#app-inner {
  display: flex;  
  flex-direction: column;
  // align-items: flex-start;
  max-width: 800px;
}

body {
  @include resetSpacing();
}
</style>
