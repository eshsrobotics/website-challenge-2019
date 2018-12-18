<template>
  <div class="sponsors-page">
    <page-desc>
       <p>The Robotics Club is grateful all our sponsors</p>
    </page-desc>

    <sponsor-card-wrapper tier="diamond">
      <sponsor-card aTier="diamond" :sponsor="sponsors.gamma"></sponsor-card>
    </sponsor-card-wrapper>

    <sponsor-card-wrapper tier="gold">
      <sponsor-card aTier="gold" :sponsor="sponsors.epsilon"></sponsor-card>
    </sponsor-card-wrapper>

    <sponsor-card-wrapper tier="silver">
      <sponsor-card aTier="silver" :sponsor="sponsors.zeta"></sponsor-card>
      <sponsor-card aTier="silver" :sponsor="sponsors.kappa" ></sponsor-card>
    </sponsor-card-wrapper>

    <sponsor-card-wrapper tier="bronze">
      <sponsor-card aTier="bronze" :sponsor="sponsors.omicron"></sponsor-card>
      <sponsor-card aTier="bronze" :sponsor="sponsors.rho"></sponsor-card>
      <sponsor-card></sponsor-card>
    </sponsor-card-wrapper>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import SponsorCardWrapper from '@/components/card-layout/WrapperCardSponsor'
import SponsorCard from '@/components/card/CardSponsor'

export default {
  name: 'sponsors',
  data() {
    let placeHolder = 'https://dummyimage.com/1280x960/dee2e6/212529';
    return {
      sponsors: {
        gamma: {
          name: "Gamma Foo" ,
          image: placeHolder,
          imageAltText: "Gamma Logo"
        },
        epsilon: {
          name: "Epsilon Bar" ,
          image: placeHolder,
          imageAltText: "Epsilon Logo"
        },
        zeta: {
          name: "Zeta Baz" ,
          image: placeHolder,
          imageAltText: "Zeta Logo"
        },
        kappa: {
          name: "Kappa Foo" ,
          image: placeHolder,
          imageAltText: "Kappa Logo"
        },
        omicron: {
          name: "Omicron Bar" ,
          image: placeHolder,
          imageAltText: "Omicron Logo"
        },
        rho: {
          name: "Rho Baz" ,
          image: placeHolder,
          imageAltText: "Rho Logo"
        },
        phi: {
          name: "Phi Foo",
          image: placeHolder,
          imageAltText: "Phi Logo"
        }
      }
    }
  },
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

