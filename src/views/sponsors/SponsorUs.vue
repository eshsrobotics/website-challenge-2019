<template>
<div class="sponsor-us">
  <page-desc>
    <p>The P.O.T.A.T.O.E.S. is grateful for all our sponsor's contributions. If you want to help the club grow and flourish, consider donating! Donations do not just include monetary values, but other resources such as equipment and tools.</p>
    <p>Please <router-link to="/contact">Contact us</router-link> for your inquiries relating to sponsorship, or any other questions!</p>
    <br/>
    <h3>See Our Sponsors</h3>
    <p>Gamma foo description.</p>
    <router-link to="/sponsors"><c-button>Our Sponsors</c-button></router-link>
  </page-desc>

</div>
</template>

<script>
  import CButton from '@/components/ui/CButton'
  import PageDesc from '@/components/PageDescription'

export default {
  name: 'sponsorUs',
  components: {
    'c-button': CButton,
    'page-desc': PageDesc
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>