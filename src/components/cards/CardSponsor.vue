<template>
  <div class="sponsor">
    <h3> {{ sponsor.name }} </h3>
    <img :src="sponsor.image" :alt="sponsor.imageAltText" :width="pictureWidth"/>
  </div>
</template>

<script>
export default {
  name: 'sponsorCard',
  computed: {
    // Purpose: To receive the showSponsor property (prop) when declaring this component
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
    sponsor: {
      type: Object,
      // We put parenthesis around object to denote that we are returning an object rather than a
      // function (since we're using es6 fat arrow notation)
      default: () => ({
        name: 'Sponsor Name',
        image: 'https://dummyimage.com/1280x960/dee2e6/212529',
        imageAltText: 'Sponsor Alt Text' 
      })
    },
    aTier: {
      type: String,
      default: 'bronze'
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

h3 {
  display: inline;
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
  @include hoverShadow($std-shadow-hov, $oc-blue-3, 32px);
}

.gold .sponsor {
  @include hoverShadow($std-shadow-hov, $oc-yellow-3, 32px);
}

.silver .sponsor {
  @include hoverShadow($std-shadow-hov, $oc-indigo-3, 32px);
}

.bronze .sponsor {
  @include hoverShadow($std-shadow-hov, $oc-orange-3, 32px);
}

</style>



