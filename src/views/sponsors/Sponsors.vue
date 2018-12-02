<template>
  <div class="sponsors-page">
    <page-heading/>
    <page-desc>
       <p>The Robotics Club is grateful all our sponsors</p>
    </page-desc>

    <sponsor-card-wrapper tier="diamond">
      <sponsor-card aTier="diamond" showSponsor="gamma"></sponsor-card>
    </sponsor-card-wrapper>

    <sponsor-card-wrapper tier="gold">
      <sponsor-card aTier="gold" showSponsor="epsilon"></sponsor-card>
    </sponsor-card-wrapper>

    <sponsor-card-wrapper tier="silver">
      <sponsor-card aTier="silver" showSponsor="zeta"></sponsor-card>
      <sponsor-card aTier="silver" showSponsor="kappa" ></sponsor-card>
    </sponsor-card-wrapper>

    <sponsor-card-wrapper tier="bronze">
      <sponsor-card aTier="bronze" showSponsor="omicron"></sponsor-card>
      <sponsor-card aTier="bronze" showSponsor="rho"></sponsor-card>
      <sponsor-card aTier="bronze" showSponsor="phi"></sponsor-card>
    </sponsor-card-wrapper>
  </div>
</template>

<script>
import PageHeading from '@/components/ui/PageHeading'
import PageDesc from '@/components/PageDescription'
import SponsorCardWrapper from '@/components/cards/SponsorCardWrapper'
import SponsorCard from '@/components/cards/SponsorCard'

export default {
  name: 'sponsors',
  components: {
    'page-heading': PageHeading,
    'page-desc': PageDesc,
    'sponsor-card-wrapper': SponsorCardWrapper,
    'sponsor-card': SponsorCard
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>

