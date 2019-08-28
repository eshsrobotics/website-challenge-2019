<template>
  <div class="sponsor" :class="sponsor.tier">
    <h3> {{ sponsor.name }} </h3>
    <img :src="sponsor.image" :alt="sponsor.imageAltText" :width="pictureWidth"/>
  </div>
</template>

<script>
import CPhoto from '@/components/ui/CPhoto'
export default {
  name: 'cardSponsor',
  computed: {
    pictureWidth: function() {
      // Sponsor photograph size now based on width of photograph (rather than just the width)
      // Sponsors of the same tier now have the same area
      // Calculated by hand TODO: // Perform calculations manually
      if(this.sponsor.name === "Ed Foundation") {
        return 430.3 + 'px';
      }
      else if(this.sponsor.name === "Xerox") {
        return 473.10 + 'px';
      }
      else if(this.sponsor.name === "Booz Allen Hamilton") {
        return 468.21 + 'px';
      }
      else if(this.sponsor.name === "Imforza") {
        return 276.66 + 'px';
      }
      // if(this.sponsor.tier === "gold") {
      //   return (250 * 1.25 * 1.25) + "px"
      // }
      // else if(this.sponsor.tier === "silver") {
      //   return (250 * 1.25) + "px"
      // }
      // else if(this.sponsor.tier === "bronze") {
      //   return "100px"
      // }
    }
  },
  props: {
    sponsor: {
      type: Object,
      default: () => ({
        name: 'Sponsor Name',
        image: 'https://dummyimage.com/1280x960/dee2e6/212529',
        imageAltText: 'Sponsor Alt Text',
        tier: 'bronze'
      })
    }
  },
  components: {
    'c-photo': CPhoto
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
  max-width: 100%;

  img {
    max-width: 100%;
    object-fit: scale-down;
  }
}

.gold.sponsor {
  @include hoverShadow($std-shadow-hov, $oc-yellow-3, 32px);
}
.silver.sponsor {
  @include hoverShadow($std-shadow-hov, $oc-indigo-3, 32px);
}
.bronze.sponsor {
  @include hoverShadow($std-shadow-hov, $oc-orange-3, 32px);
}
</style>
