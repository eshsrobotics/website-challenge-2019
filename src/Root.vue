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

* {
  @include resetSpacing();
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: 'Poppins', sans-serif;
}

h3 {
  font-family: 'Poppins', sans-serif;
}

p {
  font-family: 'Raleway';
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper-inner {
  max-width: 800px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
