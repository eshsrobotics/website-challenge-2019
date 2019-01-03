<template>
  <div class="wrapper">
    <div class="column">
      <p>About</p>
      <ul>
        <li><router-link to="/about">The club</router-link></li>
        <li><router-link to="/about/coaches-and-mentors">Coaches &amp; Mentors</router-link></li>
        <li><router-link to="/about/website">Website</router-link></li>
      </ul>
    </div>
    <div class="column">
      <p>Social Media</p>
      <ul>
        <li><a href="https://twitter.com/eshsPotatoes" target="_blank">Twitter</a></li>
        <li><a href="https://www.instagram.com/eshspotatoes" target="_blank">Instagram</a></li>
        <li><a href="https://www.facebook.com/eshspotatoes" target="_blank">Facebook</a></li>
      </ul>
    </div>
    <div class="column">
      <p>Contact</p>
      <ul>
        <li><router-link to="/contact">Webmaster</router-link></li>
        <li><a href="https://www.elsegundohigh.org/" target="_blank">School</a></li>
      </ul>
    </div>
    <div class="column">
      <p>Sponsors</p>
      <ul>
        <li><router-link to="/sponsors">Sponsors</router-link></li>
        <li><router-link to="/sponsors/us">Sponsor Us</router-link></li>
      </ul>
    </div>
    <div class="column">
      <img src="@/assets/robotics-logo.png" alt="Logo" height="50px" width="50px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.wrapper {
  // display: flex;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: white;
  padding: 10px 10px 10px 10px;
  border-top: 2px solid $oc-yellow-1;
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