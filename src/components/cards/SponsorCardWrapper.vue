<template>
  <div class="sponsor-card-wrapper">
    <h2> {{ displayTier }} </h2>
    <layout-card-overflow :class="tier">
      <slot></slot>
    </layout-card-overflow>
  </div>
</template>

<script>
import LayoutCardOverflow from '@/components/cards/LayoutCardsOverflow'

export default {
  props: {
    tier: String,
  },
  computed: {
    displayTier: function() {
      return this.tier.charAt(0).toUpperCase() + this.tier.slice(1)
    }
  },
  components: {
    'layout-card-overflow': LayoutCardOverflow
  }
}
</script>

<style scoped lang="scss">
// The styles for the class "tier" is in a child component, SponsorCard

h2 {
  margin-bottom: 3px;
}
</style>
