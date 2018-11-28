<template>
  <div id="app">
      <navbar class="nav"/>
      <div class="router-view-outer">
        <router-view class="router-view"/>
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
  font-size: 2.125em;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
}

h3 {
  font-family: 'Poppins', sans-serif;
  // font-size: 1.5em;
}

p {
  font-family: 'Raleway', sans-serif;
  font-size: 1.125em;
  line-height: 150%;
}

// This is for layout 100% page width
.router-view-outer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 20px;

}
.router-view {
  width: 100%;
}
</style>
