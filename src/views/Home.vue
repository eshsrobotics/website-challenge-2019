<template>
  <div class="home">
    <page-desc>
      <p>We're a club located in the <b>heart of El Segundo</b>, We have a <b>strong passion</b> for robotics, programming, engineering, and anything related.</p>
      <p>The team resides in the South Bay at El Segundo High School.</p>
    </page-desc>

    <h2>Competitions</h2>
    <layout-cards-fit class="competitions">
      <competition-card :showCompetition="competitions.cyberpatriots"></competition-card>
      <competition-card :showCompetition="competitions.frc"></competition-card>
      <competition-card :showCompetition="competitions.vex"></competition-card>
    </layout-cards-fit>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CompetitionCard from '@/components/cards/CompetitionCard'
import LayoutCardsFit from '@/components/cards/LayoutCardsFit'

export default {
  name: 'home',
   data() {
    let placeHolder = 'https://dummyimage.com/1280x960/dee2e6/212529'
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
  components: {
    'page-desc': PageDesc,
    'competition-card': CompetitionCard,
    'layout-cards-fit': LayoutCardsFit
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>
