<template>
  <div class="image-wrapper">
    <div class="image-wrapper-inner" :class="cardState">
      <div class="image-front" :style="getPictureWidth">
        <!--<div class="maximize-icon" @click="flipCard">-->
          <!--<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize-2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>-->
        <!--</div>-->
        <img :src="imageInfo.image" :alt="imageInfo.imageAltText">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "photo",
  data() {
    return {
      cardState: 'card-small'
    }
  },
  computed: {
    getPictureWidth: function() {
      // console.log('cphoto', this.pictureWidth)
      let myString = "width: " + this.pictureWidth + ";" + "height: " + this.pictureHeight
      return myString;
    }
  },
  methods: {
    flipCard: function() {
      if(this.cardState === 'card-small') {
        this.cardState = 'card-large'
      }
      else {
        this.cardState = 'card-small'
      }
      // console.log('Card changing state')
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

.image-front {
  /*position: absolute;*/
}

img {
  width: 100%;
  max-width: 100%;
  /*height: 100%;*/
  /*max-height: 100%;*/
  border-radius: $border-radius-small;
}

.maximize-icon {
  background-color: rgba(241, 243, 245, 0.3);
  position: absolute;
  right: 5px;
  top: 5px;
  border: $border-radius-small;
}

svg * {
  color: $oc-gray-8;
}
</style>