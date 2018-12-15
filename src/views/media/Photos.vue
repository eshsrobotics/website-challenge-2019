<template>
  <div class="photos">
    <div v-for="year in photoData" :key="year.year" class="card">
      <h2>{{ year.year }}</h2>
      <layout-cards-overflow class="events-wrapper">
        <div v-for="event in year.events" :key="event.name" class="event">
          <card-generic :cardInfo="event" class="card-generic"></card-generic>
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

.card-generic {
  width: 300px;
}

.events-wrapper {
  margin-bottom: 15px;
}
</style>