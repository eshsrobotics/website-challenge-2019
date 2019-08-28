<template>
  <div class="album">
    <page-desc>
      <h1> {{ getAlbumData.title }} </h1>
      <h2 class="album-year"> {{ getAlbumData.year || this.$route.path.split('/')[2].slice(0, 9) }}</h2>
      <p> {{ getAlbumData.desc }}</p>
      <div class="view-buttons">
        <a @click="$router.go(-1)">
          <c-button>Go Back</c-button>
        </a>
        <a target="__blank" :href="githubLink">
          <c-button>View On GitHub</c-button>
        </a>
      </div>
    </page-desc>
    <layout-cards-struct class="events-wrapper">
      <card-generic v-for="photo in getAlbumData.photos" :cardInfo="imageInfo(photo)" :key="photo"></card-generic>
    </layout-cards-struct>
    <a @click="$router.go(-1)">
      <c-button>Go Back</c-button>
    </a>
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
      'getAlbumData',
      'getOtherAlbumData'
    ]),
    githubLink: function() {
      let array = this.getOtherAlbumData.githubLink.replace(/\/blob/, '/tree').split('/').slice()
      array.pop()
      return array.join('/')
    },
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
      newImageInfo.subtitle = "Image " + photo
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
.view-buttons {
  margin-bottom: 15px;
}

.album-year {
  margin-top: 0;
  padding-top: 0;
}
</style>
