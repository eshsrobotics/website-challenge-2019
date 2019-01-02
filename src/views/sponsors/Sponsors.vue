<template>
  <div class="sponsors-page">
    <page-desc>
       <p>The Robotics Club is grateful all our sponsors</p>
    </page-desc>

    <card-sponsor-wrapper tier="diamond">
      <card-sponsor :sponsor="sponsors.gamma"></card-sponsor>
    </card-sponsor-wrapper>

    <card-sponsor-wrapper tier="gold">
      <card-sponsor :sponsor="sponsors.epsilon"></card-sponsor>
    </card-sponsor-wrapper>

    <card-sponsor-wrapper tier="silver">
      <card-sponsor :sponsor="sponsors.zeta"></card-sponsor>
      <card-sponsor :sponsor="sponsors.kappa"></card-sponsor>
    </card-sponsor-wrapper>

    <card-sponsor-wrapper tier="bronze">
      <card-sponsor :sponsor="sponsors.omicron"></card-sponsor>
      <card-sponsor :sponsor="sponsors.rho"></card-sponsor>
      <card-sponsor></card-sponsor>
    </card-sponsor-wrapper>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import WrapperCardSponsor from '@/components/card-layout/WrapperCardSponsor'
import CardSponsor from '@/components/card/CardSponsor'
import SponsorData from '@/views/sponsors/sponsorData'

export default {
  name: 'sponsors',
  data() {
    return {
      sponsors: SponsorData
    }
  },
  components: {
    'page-desc': PageDesc,
    'card-sponsor-wrapper': WrapperCardSponsor,
    'card-sponsor': CardSponsor
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>

