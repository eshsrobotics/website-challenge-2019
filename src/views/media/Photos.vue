<template>
  <div class="photos">
    <div v-for="yearEvents in photoData" :key="yearEvents.year" class="card">
      <h2>{{ yearEvents.year }}</h2>
      <layout-cards-overflow class="events-wrapper">
        <div v-for="event in yearEvents.events" :key="event.name" class="event">
          <card-media :event="event"></card-media>
        </div>
      </layout-cards-overflow>
   
    </div>
  </div>
</template>

<script>
import CardMedia from '@/components/cards/CardMedia'
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
    'card-media': CardMedia,
    'layout-cards-overflow': LayoutCardsOverflow
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';
</style>