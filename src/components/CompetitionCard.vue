<template>
  <div class="competition">
    <h3> {{ competition.title }} </h3>
    <img :src="competition.image" :alt="competition.imageAltText" width="200px">
    <p> {{ competition.desc }} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      competitions: {
        "cyberpatriots": {
          "title": "CyberPatriots",
          "image": "https://1.cdn.edl.io/EYa1dmwXLiXunBndQgsRcJT50pSyJPaja64b8hhAJi0TrNVY.jpg",
          "imageAltText": "Alt text",
          "desc": "Small teams search computer systems for vulnerabilities and exploits. As you compete, gain points for every vulnerability that is patched!"
        },
        "frc": {
          "title": "FRC",
          "image": "https://pbs.twimg.com/media/DXVQR8MVQAAyDFm.jpg",
          "imageAltText": "Alt text",
          "desc": "Brainstorm, plan, and execute the fabrication of a large robot within a span of 6-weeks. We'll teach you what skills you need to succeed."
        },
        "vex": {
          "title": "VEX",
          "image": "https://files.slack.com/files-pri/T2BU2UB37-FDZQKGALE/image_uploaded_from_ios.jpg",
          "imageAltText": "Alt text",
          "desc": "Small robots must complete the competition objective and maximize points during the intense competition. Learn the fundamentals of building a robot with a dedicated team!"
        }
      }
    }
  },
  props: {
    comp: String
  },
  computed: {
    competition: function() {
      return this.competitions[this.comp];
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.competition {
  @include genericCard();


}
</style>


