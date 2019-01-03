<template>
  <div class="photos">
    <p>See the team's photos throughout the year. Find photos from competitions, events, and general lab work.</p>
    <div v-for="year in newPhotoData" :key="year.year" class="card">
      <h2>{{ year.year }}</h2>
      <layout-cards-struct class="events-wrapper">
          <card-generic v-for="event in year.events" :cardInfo="newEvent(event)" :key="event.name" class="card-generic"></card-generic>
      </layout-cards-struct>
    </div>
  </div>
</template>

<script>
import CardGeneric from '@/components/card/CardGeneric'
import LayoutCardsStruct from '@/components/card-layout/LayoutCardsStruct'
import photoDataJson from '@/views/media/photoData.json'

export default {
  name: 'photos',
  data() {
    return {
      photoData: photoDataJson
    }
  },
  computed: {
    // I don't know why this modifies photoData. Array.prototype.map() is supposed to return the modified array, not modify the actual array I'm pretty sure
    newPhotoData: function() {
      return this.photoData.map(yearsEvents => {
        yearsEvents.events = yearsEvents.events.map(event => {
          event.buttonText = 'View'
          let modifiedPath = this.$route.path.split('/').slice(0, -1).join('/')
          event.buttonRouteTo = modifiedPath + '/album/' + event.uri
          return event
        })
        return yearsEvents
      })
    }
  },
  methods: {
    newEvent: function(event) {
      return event
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