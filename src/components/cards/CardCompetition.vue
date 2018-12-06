<template>
  <div class="competition">
    <h3> {{ showCompetition.title }} </h3>
    <img :src="showCompetition.image" :alt="showCompetition.imageAltText" width="100%">
    <p> {{ showCompetition.desc }} </p>
  </div>
</template>

<script>
export default {
  name: 'competitionCard',
  props: {
    showCompetition: {
      type: Object,
      default: () => ({
        title: 'Competition Name',
        image: 'https://dummyimage.com/1280x960/dee2e6/212529',
        imageAltText: 'CyberPatriots Description Text',
        desc: 'Description about the competition that is engaging and exciting to all members of target audience.'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.competition {
  @include genericCard();
  // This overrides default padding of card
  padding: 14px;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.33em;
}

img {
  border-radius: $border-radius;
}

</style>


