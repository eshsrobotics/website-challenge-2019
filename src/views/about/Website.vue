<template>
  <div class="about-website">
    <page-desc>
      <p>The website uses various modern web development technologies. It uses <a href="https://vuejs.org/" target="_blank">VueJS</a> as a framework. CSS styling is compiled down from <a href="https://sass-lang.com/" target="_blank">SCSS</a>. Much of the boilerplate is taken care of by the amazing <a href="https://cli.vuejs.org/guide/" target="_blank">Vue Cli 3</a>, which creates a vue-specific abstraction over <a href="https://webpack.js.org/" target="_blank">Webpack 4</a>. Vue Cli 3 automatically sets up <a href="https://babeljs.io/" target="_blank">Babel</a> transpiling, and the outputed bundles are code-splitted and minified, paired with source maps.</p>
      <p>The website code can be found on <a href="https://github.com/eshsrobotics/RobotEventsChallengeWebsite2018" target="_blank">GitHub</a>. This website was originally created for the <a href="https://challenges.robotevents.com/challenge/95">Robotics Team Website Challenge</a> (2019). Any questions or comments about the website can be submitted using the <router-link to="/contact">contact</router-link> page.</p>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CBreadcrumb from '@/components/ui/Breadcrumb'

export default {
  data() {
    return {
      
    }
  },
  components: {
    'page-desc': PageDesc,
    'c-breadcrumb': CBreadcrumb
  }
}
</script>
