<template>
  <div id="app">
      <navbar class="nav"/>
      <div class="wrapper">
        <router-view class="wrapper-inner"/>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/nav/Navbar'

export default {
  components: {
    'navbar': Navbar
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

body {
  @include resetSpacing();
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper-inner {
  max-width: 800px;
}
</style>
