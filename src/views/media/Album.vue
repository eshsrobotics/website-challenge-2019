<template>
  <div class="album">
    <page-desc>
      <h1> {{ getAlbumData.title }} </h1>
      <h2> {{ getAlbumData.year }}</h2>
      <p> {{ getAlbumData.desc }}</p>
    </page-desc>
    <layout-cards-struct class="events-wrapper">
      <card-generic v-for="photo in getAlbumData.photos" :cardInfo="imageInfo(photo)" :key="photo"></card-generic>
    </layout-cards-struct>
    <router-link to="/resources/photos">
      <c-button>Go Back</c-button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import LayoutCardsStruct from '@/components/card-layout/LayoutCardsStruct'
import CardGeneric from '@/components/card/CardGeneric'
import PageDesc from '@/components/PageDescription'
import CButton from '@/components/ui/CButton'

export default {
  name: "Album",
  mounted: function(){
    this.getAlbumURIfromURL(this.getAlbumURIfromURL)
  },
  watch: {
    '$route' (to, from) {
      this.getAlbumURIfromURL(this.getAlbumURIfromURL)
    }
  },
  computed: {
    ...mapGetters([
        'getAlbumData'
    ])
  },
  methods: {
    ...mapMutations([
      'setAlbumDataAccordingToURI'
    ]),
    imageInfo: function(photo) {
      let newImageInfo = {}
      newImageInfo.image = this.getAlbumData.photosPrefix + photo + this.getAlbumData.photosSuffix
      let thing = newImageInfo.image.split('.')
      let largeImage = thing.filter(el => el !== "small").join('.')
      newImageInfo.imageHighRes = largeImage
      newImageInfo.subtitle = photo
      return newImageInfo
    },
    getAlbumURIfromURL: function() {
      let route = this.$route.path

      let newRoute = route.split('/').slice(-1)[0]
      this.setAlbumDataAccordingToURI(newRoute)
      return newRoute;
    }
  },
  components: {
    'layout-cards-struct': LayoutCardsStruct,
    'card-generic': CardGeneric,
    'page-desc': PageDesc,
    'c-button': CButton
  }
}
</script>

<style scoped lang="scss">
</style>