<template>
  <div id="app">
    <navbar class="nav-navbar"/>
    <div class="router-view-outer">
        <!--<transition name="fade" mode="out-in">-->
          <page-heading class="heading"/>
        <!--</transition>-->
        <!--<transition name="slide" mode="out-in">-->
          <router-view class="router-view"/>
        <!--</transition>-->
      <!--<vue-progress-bar></vue-progress-bar>-->
      </div>
      <foot class="footer"></foot>
  </div>
</template>

<script>
import Navbar from '@/components/nav/Navbar'
import PageHeading from '@/components/ui/PageHeading'
import Footer from '@/components/footer/Foot'

export default {
  name: 'theRoot',
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  beforeRouteEnter: function(to, from, next) {
    console.log('tester gamma')
  },
  components: {
    'navbar': Navbar,
    'page-heading': PageHeading,
    'foot': Footer
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

* {
  @include resetSpacing();
  font-family: 'Raleway', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

h1 {
  color: $std-text; 
  font-family: 'Poppins', sans-serif;
  font-size: 2.125rem;
}

h2 {
  color: $std-text;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
}

h3 {
  color: $std-text; 
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
}

h4 {
  color: $std-text;
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-style: italic;
}

hr {
  border: 0;
  clear: both;
  display: block;
  width: 100%;
  background-color: $std-text-underline;
  height: 2px;
  border-radius: $border-radius-small;
}

ul.chevron {
  list-style-image: url('./assets/chevron-right.svg');
}

p {
  color: $std-text;
  font-family: 'Raleway', sans-serif;
  font-size: $std-text-size;
  line-height: $std-text-line-height;
}

a {
  color: $std-text;
  text-decoration: line;
  font-family: 'Raleway', sans-serif;
  font-size: $std-text-size;
  line-height: $std-text-line-height;
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
.nav-navbar {
  margin: 10px 20px 0 15px;
}

.heading {
  margin-top: -8px;
}

// This is for layout 100% page width
.router-view-outer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 20px 10px 20px;

}
.router-view {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1350px;
  /*height: 500px;*/
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all .2s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
