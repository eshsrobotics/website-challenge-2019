<template>
  <div class="about-website">
    <page-desc>
      <h2>Technology</h2>
      <p>The website uses various modern web development technologies. It uses <a href="https://vuejs.org/" target="_blank">VueJS</a> as a JavaScript framework. Css styling is compiled down from <a href="https://sass-lang.com/" target="_blank">Sass</a>. Much of the boilerplate is taken care of by the amazing <a href="https://cli.vuejs.org/guide/" target="_blank">Vue Cli 3</a>, which creates a Vue-specific abstraction over <a href="https://webpack.js.org/" target="_blank">Webpack 4</a>. Vue Cli 3 automatically sets up <a href="https://babeljs.io/" target="_blank">Babel</a> transpiling, outputs code-splitted and minified bundles paired with source maps, generates <a href="https://router.vuejs.org/">Vue Router</a> boilerplate, and more!</p>
      <p>This website was originally created for the <a href="https://challenges.robotevents.com/challenge/95">Robotics Team Website Challenge</a> (2019). The code can be found on <a href="https://github.com/eshsrobotics/RobotEventsChallengeWebsite2018" target="_blank">GitHub</a>. Created by Edwin Kofler, among <a href="https://github.com/eshsrobotics/WebsiteChallenge2019/graphs/contributors" target="_blank">other contributors</a>. Questions or comments about the website can be submitted using the <router-link to="/contact">contact</router-link> page.</p>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CBreadcrumb from '@/components/ui/Breadcrumb'

export default {
  name: 'website',
  components: {
    'page-desc': PageDesc,
    'c-breadcrumb': CBreadcrumb
  }
}
</script>
