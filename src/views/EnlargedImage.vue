<template>
  <div>
    <h1>View Image</h1>
    <h3>Description</h3>
    <p>{{ base64ToObject.imageAltText }}</p>
    <div class="photo">
      <img :src="base64ToObject.image" :alt="base64ToObject.imageAltText">
    </div>
    <div class="buttons">
      <c-button><a @click="$router.go(-1)">Go Back</a></c-button>
      <c-button>View on GitHub</c-button>
      <a :href="base64ToObject.image"><c-button>View Raw</c-button></a>
      <c-button>Direct Download</c-button>

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
  methods: {
    changeRoute: function() {
      this.$router.go(-1)
    }
  },
  computed: {
    base64ToObject: function() {
      // Obfuscating the object, convert to base64, with some catches (!//)
      let route = this.$route.path
      let base64 = route.split('/').slice(-1)[0]
      // Remember we replaced '/' with '!'
      let myThing = base64.split('!').join('/') // Slower than replacing with RegEx
      myThing = JSON.parse(atob(myThing))
      console.log('upsilon', myThing)
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
  width: 100%;
  max-width: 100%;
  border-radius: $border-radius;
}
</style>