<template>
  <div class="sponsors-page">
    <page-desc>
       <h1>Sponsors</h1>
       <p>The Robotics Club is grateful all our sponsors</p>
    </page-desc>

    <!-- <sponsor-card-wrapper tier="diamond"></sponsor-card-wrapper> -->

    <sponsor-card-wrapper tier="gold">
      <sponsor-card showSponsor="gamma"></sponsor-card>
    </sponsor-card-wrapper>

    <sponsor-card-wrapper tier="silver">
      <sponsor-card showSponsor="epsilon"></sponsor-card>
      <sponsor-card showSponsor="zeta"></sponsor-card>
    </sponsor-card-wrapper>

    <sponsor-card-wrapper tier="bronze">
      <sponsor-card showSponsor="kappa"></sponsor-card>
      <sponsor-card showSponsor="omicron"></sponsor-card>
      <sponsor-card showSponsor="rho"></sponsor-card>
      <sponsor-card showSponsor="phi"></sponsor-card>
    </sponsor-card-wrapper>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';
import SponsorCardWrapper from '@/components/cards/SponsorCardWrapper';
import SponsorCard from '@/components/cards/SponsorCard';

export default {
  name: 'sponsors',
  components: {
    'page-desc': PageDesc,
    'sponsor-card-wrapper': SponsorCardWrapper,
    'sponsor-card': SponsorCard
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>

