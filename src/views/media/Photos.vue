<template>
  <div class="photos">
    <div v-for="yearEvents in photoData" :key="yearEvents.year" class="card">
      <h2>{{ yearEvents.year }}</h2>
      <layout-cards-overflow class="events-wrapper">
        <div v-for="event in yearEvents.events" :key="event.name" class="event">
          <card-generic :cardInfo="event"></card-generic>
        </div>
      </layout-cards-overflow>
   
    </div>
  </div>
</template>

<script>
import CardGeneric from '@/components/cards/CardGeneric'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import photoDataJson from '@/views/media/photoData.json'

export default {
  name: 'photos',
  data() {
    return {
      photoData: photoDataJson
    }
  },
  components: {
    'card-generic': CardGeneric,
    'layout-cards-overflow': LayoutCardsOverflow
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';
</style>