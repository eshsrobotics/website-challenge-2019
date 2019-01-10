<template>
  <div class="image-wrapper">
    <div class="image-wrapper-inner" :class="cardState">
      <div class="image-front" :style="getPictureWidth">
        <img :src="imageInfo.image" :alt="imageInfo.imageAltText">
        <div class="maximize-icon">
          <router-link :to="pictureEnlargeRouteTo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212529" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize-2">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// SVG taken from feather icons
export default {
  name: "photo",
  data() {
    return {
      cardState: 'card-small',
      currentColor: 'black'
    }
  },
  computed: {
    getPictureWidth: function() {
      // console.log('cphoto', this.pictureWidth)
      let myString = "width: " + this.pictureWidth + ";" + "height: " + this.pictureHeight
      return myString;
    },
    pictureEnlargeRouteTo: function() {
      let thing = this.imageInfo.image.split('.')
      let largeImage = thing.filter(el => el !== "small").join('.')
      this.imageInfo.imageHighRes = largeImage
      let base64Thing = btoa(JSON.stringify(this.imageInfo))
      // Note that base64 has slashes (63rd char), so must remove for path
      base64Thing = base64Thing.split('/').join('!')
      return '/image/' + base64Thing
    }
  },
  props: {
    imageInfo: {
      type: Object,
      default: () => ({
        image: 'https://dummyimage.com/1280x960/dee2e6/212529',
        imageAltText: 'Generic Alt Text'
      })
    },
    pictureWidth: String,
    pictureHeight: String
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.image-wrapper {
  position: static;
}

.image-wrapper-inner {
  position: relative;
}

img {
  width: 100%;
  max-width: 100%;
  border-radius: $border-radius-small;
}

img:hover ~ .maximize-icon, .maximize-icon:hover {
  visibility: visible;
  opacity: 1;
  transform: translate(0px, 0px);
  transition: all 0.15s ease-in-out;
}

svg {
  background-color: rgba(241, 243, 245, 0.3);
  border-radius: $border-radius-small;
}

.maximize-icon {
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transform: translate(10px, 3px);
  transition: all 0.15s ease-in-out;
}
</style>