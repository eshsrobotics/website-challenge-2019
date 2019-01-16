<template>
  <div class="photos">
    <p>See the team's photos throughout the years. Find competition, event, and other photos!</p>
    <div v-for="year in newPhotoData" :key="year.year" class="card">
      <h2 class="year">{{ year.year }}</h2>
      <div class="events-wrapper">
          <card-generic v-for="event in year.events" :cardInfo="event" :key="event.name" class="card-generic"></card-generic>
      </div>
    </div>
  </div>
</template>

<script>
import CardGeneric from '@/components/card/CardGeneric'
import photoDataJson from '@/views/media/photoData.json'

export default {
  name: 'photos',
  data() {
    return {
      photoData: photoDataJson
    }
  },
  computed: {
    newPhotoData: function() {
      // I don't know why this modifies photoData. Array.prototype.map() is supposed to return the modified array, not modify the actual array, I'm pretty sure
      // Not so thiccc :(. Should have just used for loops or something?
      return this.photoData.map(yearsEvents => {
        yearsEvents.events = yearsEvents.events.map(event => {
          event.buttonText = 'View'
          let modifiedPath = this.$route.path.split('/').slice(0, -1).join('/')
          event.buttonRouteTo = modifiedPath + '/album/' + event.uri
          event.year = yearsEvents.year
          return event
        })
        return yearsEvents
      })
    }
  },
  components: {
    'card-generic': CardGeneric
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.card-generic {
  width: 300px;
}

.year {
  padding-bottom: 10px;
}
.events-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.card-generic {
  margin: 10px;
}

@media(max-width: 500px) {
  .card-generic {
    width: 100%;
  }
}
</style>