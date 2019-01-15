<template>
  <div class="wrapper">
    <div class="column about">
      <p class="column-label">About</p>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/about/team">Team</router-link></li>
        <li><router-link to="/about/website">Website</router-link></li>
      </ul>
    </div>
    <div class="column media">
      <p class="column-label">Social Media</p>
      <ul>
        <li>
          <a href="https://twitter.com/eshsPotatoes" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#343a40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            <p>Twitter</p>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/eshspotatoes" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#343a40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/eshspotatoes" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#343a40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            <p>Facebook</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="column contact">
      <p class="column-label">Contact</p>
      <ul>
        <li><router-link to="/contact">Webmaster</router-link></li>
        <li><a href="https://www.elsegundohigh.org/" target="_blank">School</a></li>
      </ul>
    </div>
    <div class="column sponsors">
      <p class="column-label">Sponsors</p>
      <ul>
        <li><router-link to="/sponsors">Sponsors</router-link></li>
        <li><router-link to="/sponsors/us">Sponsor Us</router-link></li>
      </ul>
    </div>
    <div class="column img">
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
a {
  display: flex;
  flex-direction: row;
  align-items: center;
}
svg {
  margin-right: 5px;
}
// Remember this font-size overrides the values in variables.scss
p {
  font-size: 1em;
}

.column-label {
  font-weight: bold;
}

a {
  font-size: 0.95em;
}

@media(max-width: 600px) {
  .about {
    display: none;
  }
}

  @media(max-width: 400px) {
    .sponsors {
      display: none;
    }
  }
</style>