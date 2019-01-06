<template>
  <div class="card-generic" @click="changeData">
    <h3 v-if="titleShow">{{ cardInfo.title }}</h3>
    <h4 v-if="subtitleShow">{{ cardInfo.subtitle }}</h4>
    <c-photo v-if="imageShow" :imageInfo="cardInfo" :pictureWidth="pictureWidth" :pictureHeight="pictureHeight"></c-photo>
    <p v-if="descShow">{{ cardInfo.desc }}</p>
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
    // Would it be better to use double equal (with type coercion), since these are all falsy values?
    titleShow: function() {
      let title = this.cardInfo.title;
      if(title === null || title === undefined || title === '') {
        return false;
      }
      return true;
    },
    subtitleShow: function() {
      let title = this.cardInfo.subtitle;
      if(title === null || title === undefined || title === '') {
        return false;
      }
      return true;
    },
    imageShow: function() {
      let title = this.cardInfo.image;
      if(title === null || title === undefined || title === '') {
        return false;
      }
      return true;
    },
    descShow: function() {
      let title = this.cardInfo.desc;
      if(title === null || title === undefined || title === '') {
        return false;
      }
      return true;
    },
    buttonShow: function() {
      let title = this.cardInfo.buttonText;
      if(title === null || title === undefined || title === '') {
        return false;
      }
      return true;
    }
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
      // Do not create default property (object prop) of property ()
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
}
</style>