<template>
  <div class="photos">
    <p>See the team's photos throughout the year. Find photos from competitions, events, and general lab work.</p>
    <div v-for="year in photoData" :key="year.year" class="card">
      <h2>{{ year.year }}</h2>
      <layout-cards-struct class="events-wrapper">
        <!--<div  class="event">-->
          <card-generic :cardInfo="event" v-for="event in year.events" :key="event.name" class="card-generic"></card-generic>
        <!--</div>-->
      </layout-cards-struct>
    </div>
  </div>
</template>

<script>
import CardGeneric from '@/components/cards/CardGeneric'
import LayoutCardsStruct from '@/components/cards/LayoutCardsStruct'
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
    'layout-cards-struct': LayoutCardsStruct
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.card-generic {
  width: 300px;
}

.events-wrapper {
  width: 100%;
  margin-bottom: 15px;
}
</style>