<template>
  <div class="competition">
    <h3> {{ competition.title }} </h3>
    <img :src="competition.image" :alt="competition.imageAltText" width="100%">
    <p> {{ competition.desc }} </p>
  </div>
</template>

<script>
export default {
  data() {
    let placeHolder = 'https://dummyimage.com/1280x960/dee2e6/212529';
    return {
      competitions: {
        cyberpatriots: {
          title: "CyberPatriots",
          image: placeHolder,
          imageAltText: "Alt text",
          desc: "Small teams search computer systems for vulnerabilities and exploits. As you compete, gain points for every vulnerability that is patched!"
        },
        frc: {
          title: "FRC",
          image: placeHolder,
          imageAltText: "Alt text",
          desc: "Brainstorm, plan, and execute the fabrication of a large robot within a span of 6-weeks. We'll teach you what skills you need to succeed."
        },
        vex: {
          title: "VEX",
          image: placeHolder,
          imageAltText: "Alt text",
          desc: "Small robots must complete the competition objective and maximize points during the intense competition. Learn the fundamentals of building a robot with a dedicated team!"
        }
      }
    }
  },
  props: {
    showCompetition: String
  },
  computed: {
    competition: function() {
      return this.competitions[this.showCompetition];
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.competition {
  @include genericCard();
}

h3 {
  font-size: 1.33em;
}

img {
  border-radius: $border-radius;
}

</style>


