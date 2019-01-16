<template>
  <div class="enlarge-image">
    <!--<h3 v-if="base64ToObject.imageAltText">Description</h3>-->
    <p v-if="gammaIota">{{ base64ToObject.imageAltText }}</p>
    <div class="photo">
      <img :src="base64ToObject.imageHighRes" :alt="base64ToObject.imageAltText">
    </div>
    <div class="buttons">
      <a @click="$router.go(-1)"><c-button>Go Back</c-button></a>
      <!--<c-button>View on GitHub</c-button>-->
      <!--<a :href="base64ToObject.image"><c-button>View Raw</c-button></a>-->
      <!--<c-button>Direct Download</c-button>-->
    </div>
  </div>
</template>

<script>
import CButton from '@/components/ui/CButton'

export default {
  name: "EnlargedImage",
  props: {
    pictureDataBase64: Object
  },
  computed: {
    gammaIota: function() {
      if(this.base64ToObject.imageAltText == "Alt text") {
        return false;
      }
      else if(this.base64ToObject.imageAltText) {
        return false;
      }
      return true;
    },
    base64ToObject: function() {
      // Obfuscating the object, convert to base64, with some catches (!//)
      let route = this.$route.path
      let base64 = route.split('/').slice(-1)[0]
      // Remember we replaced '/' with '!'
      let myThing = base64.split('!').join('/') // Slower than replacing with RegEx
      myThing = JSON.parse(atob(myThing))
      return myThing
    }
  },
  components: {
    'c-button': CButton
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

img {
  /*width: 100%;*/
  max-height: calc(100vh - 390px); // Eyeballing it, account for description
  max-width: 100%;
  border-radius: $border-radius;
}
</style>