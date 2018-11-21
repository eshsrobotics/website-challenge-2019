<template>
  <div class="sponsor">
    <h3> {{ sponsor.name }} </h3>
    <!-- <h3> {[ eee }} </h3> -->
    <img :src="sponsor.image" :alt="sponsor.imageAltText" width="250px"/>
  </div>

</template>


<script>
export default {
  data() {
    let placeHolder = 'https://dummyimage.com/1280x960/dee2e6/212529';
    return {
      eee: 'ter',
      sponsors: {
        company1: {
          name: "Company 1" ,
          image: placeHolder,
          imageAltText: "Sponsor 1 Logo"
        },
        company2: {
          name: "Company 2" ,
          image: placeHolder,
          imageAltText: "Sponsor 2 Logo"
        },
        company3: {
          name: "Company 3" ,
          image: placeHolder,
          imageAltText: "Sponsor 3 Logo"
        },
        company4: {
          name: "Company 4" ,
          image: placeHolder,
          imageAltText: "Sponsor 4 Logo"
        },
        company5: {
          name: "Company 5" ,
          image: placeHolder,
          imageAltText: "Sponsor 5 Logo"
        }
      }
    }
  },
  // Purpose: To recieve the showSponsor property (prop) when declaring this component
  // Ex. For the following code
  //   <sponsor-card showSponsor="companyFoo"></sponsor-card>
  //   "companyFoo" is being passed down and is equal to the value of showSponsor (for that particular component). And showSponsor must be type String, or errors will be printed in console
  props: {
    showSponsor: String
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



