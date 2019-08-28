<template>
  <div class="sponsors-page">
    <page-desc>
      <p>The Robotics Club is grateful all our sponsors</p>
    </page-desc>

    <card-sponsor-wrapper tier="gold">
      <card-sponsor
          v-for="sponsor in sponsors"
          v-if="sponsor.tier === 'gold'"
          :sponsor="sponsor"
          :key="sponsor.name">
      </card-sponsor>
    </card-sponsor-wrapper>

    <card-sponsor-wrapper tier="silver">
      <card-sponsor
          v-for="sponsor in sponsors"
          v-if="sponsor.tier === 'silver'"
          :sponsor="sponsor"
          :key="sponsor.name"></card-sponsor>
    </card-sponsor-wrapper>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CButton from '@/components/ui/CButton'
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
    'c-button': CButton,
    'card-sponsor-wrapper': WrapperCardSponsor,
    'card-sponsor': CardSponsor
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.sponsor-us {
  margin-top: 15px;
}
</style>
