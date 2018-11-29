<template>
  <div id="app">
      <navbar class="nav"/>
      <div class="router-view-outer">
        <router-view class="router-view"/>
      </div>
      <foot class="footer"></foot>
  </div>
</template>

<script>
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'

export default {
  components: {
    'navbar': Navbar,
    'foot': Footer
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
  color: $std-text; 
  font-family: 'Poppins', sans-serif;
  font-size: 2.125em;
}

h2 {
  color: $std-text;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
}

h3 {
  color: $std-text; 
  font-family: 'Poppins', sans-serif;
  // font-size: 1.5em;
}

p {
  color: $std-text;
  font-family: 'Raleway', sans-serif;
  font-size: 1.125em;
  line-height: 150%;
}

a {
  color: $std-text;
  text-decoration: line;
  font-family: 'Raleway', sans-serif;
  font-size: 1.125em;
  line-height: 150%;
}

a:link, a:visited {
  color: $std-text;
  text-decoration: line; 
  text-decoration-color: $std-text-underline;
}

a:hover, a:active {
  color: $std-text;
  text-decoration: line;
  text-decoration-color: $std-text-underline-active;

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
