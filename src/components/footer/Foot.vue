<template>
  <div class="wrapper">
    <footer-column class="about">
      <p class="label">About</p>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/about/team">Team</router-link></li>
        <li><router-link to="/about/website">Website</router-link></li>
      </ul>
    </footer-column>

    <footer-column class="media">
      <p class="label">Social Media</p>
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
          <a href="https://www.github.com/eshsrobotics" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            <p>GitHub</p>
          </a>
        </li>
      </ul>
    </footer-column>

    <footer-column class="contract">
        <p class="label">Contact</p>
        <ul>
          <li><router-link to="/contact">Webmaster</router-link></li>
          <li><a href="https://www.elsegundohigh.org/" target="_blank">School</a></li>
        </ul>
    </footer-column>

    <footer-column class="sponsors">
        <p class="label">Sponsors</p>
        <ul>
          <li><router-link to="/sponsors">Sponsors</router-link></li>
          <li><router-link to="/sponsors/us">Sponsor Us</router-link></li>
        </ul>
    </footer-column>

    <footer-column class="img">
      <img src="@/assets/robotics-logo.png" alt="El Segundo High School Robotics logo" height="50px" width="50px">
    </footer-column>
  </div>
</template>

<script>
  import AboutFooterComponent from '@/components/footer/FooterColumn';
export default {
  name: 'foot',
  components: {
    'footer-column': AboutFooterComponent
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.wrapper {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: white;
  padding: 10px 10px 10px 10px;
  border-top: 2px solid $oc-yellow-1;
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