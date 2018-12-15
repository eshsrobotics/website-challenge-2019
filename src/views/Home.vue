<template>
  <div class="home">
    <page-desc>
      <p>We're a club located in the <b>heart of El Segundo</b>, We have a <b>strong passion</b> for robotics, programming, engineering, and anything related.</p>
      <p>The team resides in the South Bay at El Segundo High School.</p>
    </page-desc>

    <h2>Competitions</h2>
    <layout-cards-fit class="competitions">
      <card-generic :cardInfo="competitions.cyberpatriots" class="competition"></card-generic>
      <card-generic :cardInfo="competitions.frc" class="competition"></card-generic>
      <card-generic :cardInfo="competitions.vex" class="competition"></card-generic>
    </layout-cards-fit>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CardGeneric from '@/components/cards/CardGeneric'
import LayoutCardsFit from '@/components/cards/LayoutCardsFit'

export default {
  name: 'home',
   data() {
    let placeHolder = 'https://dummyimage.com/1280x960/dee2e6/212529'
    return {
      competitions: {
        cyberpatriots: {
          title: "CyberPatriots",
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/cyberpatriots-competition-prep/cyberPatriots9.jpg?raw=true',
          imageAltText: "Alt text",
          desc: "Small teams search computer systems for vulnerabilities and exploits. As you compete, gain points for every vulnerability that is patched!",
          buttonText: "Learn More",
          buttonRouteTo: "/cyberpatriots"
        },
        frc: {
          title: "FRC",
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition/frccompetition59.jpg?raw=true',
          imageAltText: "Alt text",
          desc: "Brainstorm, plan, and execute the fabrication of a large robot within a span of 6-weeks. We'll teach you what skills you need to succeed.",
          buttonText: "Learn More",
          buttonRouteTo: "/frc"
        },
        vex: {
          title: "VEX",
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vrc-generic-photos/vex7.jpg?raw=true',
          imageAltText: "Alt text",
          desc: "Small robots must complete the competition objective and maximize points during the intense competition. Learn the fundamentals of building a robot with a dedicated team!",
          buttonText: "Learn More",
          buttonRouteTo: "/vex"
        }
      }
    }
  },
  components: {
    'page-desc': PageDesc,
    'card-generic': CardGeneric,
    'layout-cards-fit': LayoutCardsFit
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
</style>
