<template>
  <div class="album">
    <h1>My Album</h1>
    <p> {{ getAlbumData }}</p>
    <!--<layout-cards-struct class="events-wrapper">-->
      <!--<card-generic v-for="event in year.events" :cardInfo="imageInfo" :key="event.name" class="card-generic"></card-generic>-->
    <!--</layout-cards-struct>-->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LayoutCardsStruct from '@/components/card-layout/LayoutCardsStruct'
  import CardGeneric from '@/components/card/CardGeneric'

  export default {
    name: "Album",
    computed: {
      ...mapGetters([
          'getAlbumData'
      ]),
      imageInfo: function() {
        let newImageInfo = {}

        // newImageInfo.image = getAlbumData
        return newImageInfo
      }
    },
    components: {
      'layout-cards-struct': LayoutCardsStruct,
      'card-generic': CardGeneric
    }
  }
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>