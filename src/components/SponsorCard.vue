<template>
  <div class="sponsor">
    <h3> {{ sponsor.name }} </h3>
    <img :src="sponsor.image" :alt="sponsor.imageAltText" width="150px"/>
    <p> {{ sponsor.tier }} </p>
  </div>

</template>


<script>
export default {
  data() {
    return {
      sponsors: {
        "xerox": {
          "name": "Xerox",
          "image": "https://i2.cdn.turner.com/money/dam/assets/160128171527-xerox-logo-780x439.jpg",
          "imageAltText": "Xeros Logo",
          "tier": "Metal",
        },
        "imforza": {
          "name": "imFORZA",
          "image": "https://www.imforza.com/wp-content/uploads/2011/08/imforza-icon-imforza-bolt.png",
          "imageAltText": "imFORZA Logo",
          "tier": "Metal",
        },
        "chevron": {
          "name": "Chevron",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chevron_Logo.svg/2000px-Chevron_Logo.svg.png",
          "imageAltText": "Chevron Logo",
          "tier": "Metal",
        }
      }
    }
  },
  props: {
    spon: String
  },
  computed: {
    sponsor: function() {
      return this.sponsors[this.spon];
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.sponsor {
  @include genericCard();

}
</style>



