<template>
  <div class="card-generic" @click="changeData">
    <h3 v-if="titleShow">{{ cardInfo.title }}</h3>
    <h4 v-if="subtitleShow">{{ cardInfo.subtitle }}</h4>
    <c-photo class="photo-comp" v-if="imageShow" :imageInfo="cardInfo" :pictureWidth="pictureWidth" :pictureHeight="pictureHeight"></c-photo>
    <p v-if="descShow">{{ cardInfo.desc }}</p>
    <slot></slot>
    <router-link v-if="buttonShow" :to="cardInfo.buttonRouteTo">
      <c-button>{{ cardInfo.buttonText }}</c-button>
    </router-link>
  </div>
</template>

<script>
import CButton from '@/components/ui/CButton'
import CPhoto from '@/components/ui/CPhoto'
import { mapMutations } from 'vuex'

export default {
  name: 'cardGeneric',
  computed: {
    titleShow() { return !!this.cardInfo.title },
    subtitleShow() { return !!this.cardInfo.subtitle },
    imageShow() { return !!this.cardInfo.image },
    descShow() { return !!this.cardInfo.desc },
    buttonShow() { return !!this.cardInfo.buttonText}
  },
  mounted: function() {
    this.$store.commit('setOtherAlbumData', {
      githubLink: this.cardInfo.image
    })
  },
  methods: {
    ...mapMutations([
        'setAlbumData'
    ]),
    changeData: function() {
      // Yeah, this is called on all card components sigh
      this.$store.commit('setAlbumData', this.cardInfo)
      
    }
  },
  props: {
    cardInfo: {
      type: Object,
      default: () => ({
      //  title: 'Card Title',
      //  subtitle: 'Card Subtitle',
      //  image: 'https://dummyimage.com/1280x960/dee2e6/212529',
      //  imageAltText: 'Generic Alt Text',
      //  desc: 'Default Description',
      //  buttonText: '',
      //  buttonRouteTo: ''
      })
    },
    otherAlbumData: {
      type: Object,
      default: () => ({
      // githubLink: ''
      })
    },
    pictureWidth: {
      type: String
    },
    pictureHeight: String
  },
  components: {
    'c-button': CButton,
    'c-photo': CPhoto
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

.card-generic {
  @include genericCard();
}

.card-generic button {
  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
  }

  button {
    width: 100%;
  }
}
</style>
