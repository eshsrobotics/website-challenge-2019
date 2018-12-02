<template>
  <div class="wrapper">
    <div class="column">
      <hr>
      <p>About</p>
      <ul>
        <li><router-link to="/about/team">Team</router-link></li>
        <li><router-link to="/about/coaches-and-mentors">Coaches &amp; Mentors</router-link></li>
        <li><router-link to="/about/website">Website</router-link></li>
      </ul>
    </div>
    <div class="column">
      <p>Social Media</p>
      <ul>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
      </ul>
    </div>
    <div class="column">
      <p>Contact</p>
      <ul>
        <li><router-link to="/contact">Webmaster</router-link></li>
        <li><a href="#">School</a></li>
      </ul>
    </div>
    <div class="column">
      <p>Sponsors</p>
      <ul>
        <li><router-link to="/sponsors">Sponsors</router-link></li>
        <li><router-link to="/sponsors">Sponsor Us</router-link></li>
      </ul>
    </div>
    <div class="column">
      <img src="@/assets/robotics-logo.png" alt="" height="50px" width="50px">
    </div>
  </div>
</template>

<script>
import CButton from '@/components/ui/Button'

export default {
  components: {
    'c-button': CButton
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.wrapper {
  // display: flex;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  height: 100px;
  background-color: $oc-gray-2;
  padding: 10px 10px 20px 10px;
}

.column {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style-type: none;
}

// Remember this font-size overides the values in variables.scss
p {
  font-weight: bold;
  font-size: 1em;
}

a {
  font-size: 0.95em;
}
</style>