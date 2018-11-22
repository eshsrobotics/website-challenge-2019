<template>
  <div class="sponsor">
    <h3> {{ sponsor.name }} </h3>
    <img :src="sponsor.image" :alt="sponsor.imageAltText" :width="pictureWidth"/>
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
  computed: {
    sponsor: function() {
      return this.sponsors[this.showSponsor]
    },
     // Purpose: To recieve the showSponsor property (prop) when declaring this component
    // Ex. For the following code
    //   <sponsor-card showSponsor="companyFoo"></sponsor-card>
    //   "companyFoo" is being passed down and is equal to the value of showSponsor (for that particular component). And showSponsor must be type String, or errors will be printed in console
  
    pictureWidth: function() {
      if(this.aTier === "diamond") {
        return (250 * 1.25 * 1.25 * 1.25) + "px"
      }
      else if(this.aTier === "gold") {
        return (250 * 1.25 * 1.25) + "px"
      }
      else if(this.aTier === "silver") {
        return (250 * 1.25) + "px"
      }
      else if(this.aTier === "bronze") {
        return "250px"
      }
    }
  },
  props: {
    showSponsor: String,
    aTier: String
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

.diamond .sponsor {
  @include hoverShadow($card-shadow-hov, $oc-blue-3, 32px);
}

.gold .sponsor {
  @include hoverShadow($card-shadow-hov, $oc-yellow-3, 32px);
}

.silver .sponsor {
  @include hoverShadow($card-shadow-hov, $oc-indigo-3, 32px);
}

.bronze .sponsor {
  @include hoverShadow($card-shadow-hov, $oc-orange-3, 32px);

}
</style>



