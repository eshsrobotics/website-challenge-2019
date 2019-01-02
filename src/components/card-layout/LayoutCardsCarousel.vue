<template>
  <div class="carousel-outer">

  </div>
</template>

<script>
  // Note that the order of sponsors that show up in the Carousel directly depend on its placement in the json sponsorData

export default {
  name: "LayoutCardsCarousel",
  props: {
    dataArray: {
      type: Object
    },
    dataObject: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.carousel-outer {

}

</style>