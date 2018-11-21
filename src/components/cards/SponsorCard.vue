<template>
  <div class="sponsor">
    <h3> {{ sponsor.name }} </h3>
    <img :src="sponsor.image" :alt="sponsor.imageAltText" width="250px"/>
  </div>
</template>

<script>
export default {
  data() {
    let placeHolder = 'https://dummyimage.com/1280x960/dee2e6/212529';
    return {
      sponsors: {
        gamma: {
          name: "Gamma Foo" ,
          image: placeHolder,
          imageAltText: "Gamma Logo"
        },
        epsilon: {
          name: "Epsilon Bar" ,
          image: placeHolder,
          imageAltText: "Epsilon Logo"
        },
        zeta: {
          name: "Zeta Baz" ,
          image: placeHolder,
          imageAltText: "Zeta Logo"
        },
        kappa: {
          name: "Kappa Foo" ,
          image: placeHolder,
          imageAltText: "Kappa Logo"
        },
        omicron: {
          name: "Omicron Bar" ,
          image: placeHolder,
          imageAltText: "Omicron Logo"
        },
        rho: {
          name: "Rho Baz" ,
          image: placeHolder,
          imageAltText: "Rho Logo"
        },
        phi: {
          name: "Phi Foo",
          image: placeHolder,
          imageAltText: "Phi Logo"
        }
      }
    }
  },
  // Purpose: To recieve the showSponsor property (prop) when declaring this component
  // Ex. For the following code
  //   <sponsor-card showSponsor="companyFoo"></sponsor-card>
  //   "companyFoo" is being passed down and is equal to the value of showSponsor (for that particular component). And showSponsor must be type String, or errors will be printed in console
  props: {
    showSponsor: String,
  },
  computed: {
    sponsor: function() {
      return this.sponsors[this.showSponsor]
    },
    pictureWidth: function() {
      return "200px"
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

h3 {
  display: inline;
}

img {
  border-radius: $border-radius;
}

.sponsor {
  @include genericCard();
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

// Recall "plainum, gold, siler, bronze" classes are set in component LayoutCardOverflow.vue (which always must be parent of SponsorCard.vue
.platinum .sponsor {
  img {
    width: 200px;
  }
}

.gold .sponsor {

}

.silver .sponsor {
  
}

.bronze .sponsor {

}
</style>



