<template>
  <div class="sponsor-card-wrapper">
    <h2> {{ displayTier }} </h2>
    <layout-card-overflow :class="tier">
      <slot></slot>
    </layout-card-overflow>
  </div>
</template>

<script>
import LayoutCardOverflow from '@/components/card-layout/LayoutCardsOverflow'

export default {
  name: 'sponsorCardWrapper',
  computed: {
    // This converts makes the first letter of tier uppercase
    // Ex. Converts 'gold' to 'Gold'
    displayTier: function() {
      return this.tier.charAt(0).toUpperCase() + this.tier.slice(1)
    }
  },
  props: {
    tier: String
  },
  components: {
    'layout-card-overflow': LayoutCardOverflow
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
// The styles for the class "tier" is in a child component, SponsorCard

h2 {
  margin-bottom: 3px;
}
</style>
