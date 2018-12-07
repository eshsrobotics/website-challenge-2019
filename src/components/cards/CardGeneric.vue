<template>
  <div class="card-generic">
    <h3 v-if="titleShow">{{ cardInfo.title }}</h3>
    <h4 v-if="subtitleShow">{{ cardInfo.subtitle }}</h4>
    <div class="image-wrapper">
      <img v-if="imageShow" :src="cardInfo.image" :alt="cardInfo.imageAltText" width="100px">
    </div>
    <p v-if="descShow">{{ cardInfo.desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'cardGeneric',
  computed: {
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
    }
  },
  props: {
    cardInfo: {
      type: Object,
      // Do not create default property (object prop) of propery ()
      default: () => ({
      //  title: 'Card Title',
      //  subtitle: 'Card Subtitle',
      //  image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'Generic Alt Text'
      //  desc: 'Default Description'
      })
    }
  }
}
  
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

.card-generic {
  @include genericCard();
}

.image-wrapper {
  display: grid;
  grid-template-columns: 1fr;
}

</style>