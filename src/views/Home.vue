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

    <page-desc>
      <h2>About</h2>
      <p>dd</p>
      <br/>
    </page-desc>

    <h2>We thank our wonderful sponsors</h2>
      <infinite-slide-bar duration="50s" width="3430px">
        <div class="carousel">
          <card-sponsor :sponsor="sponsors.epsilon"></card-sponsor>
          <card-sponsor :sponsor="sponsors.zeta"></card-sponsor>
          <card-sponsor :sponsor="sponsors.kappa"></card-sponsor>
          <card-sponsor :sponsor="sponsors.omicron"></card-sponsor>
          <card-sponsor :sponsor="sponsors.rho"></card-sponsor>
        </div>
      </infinite-slide-bar>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CardGeneric from '@/components/card/CardGeneric'
import LayoutCardsFit from '@/components/card-layout/LayoutCardsFit'
import CardSponsorWrapper from '@/components/card-layout/WrapperCardSponsor'
import CardSponsor from '@/components/card/CardSponsor'
import SponsorData from '@/views/sponsors/sponsorData'

export default {
  name: 'home',
   data() {
    let placeHolder = 'https://dummyimage.com/1280x960/dee2e6/212529'
    return {
    sponsors: SponsorData,
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
    'layout-cards-fit': LayoutCardsFit,
    'card-sponsor-wrapper': CardSponsorWrapper,
    'card-sponsor': CardSponsor
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

.carousel {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  & * {
    margin: 10px 10px 10px 10px;
  }
}
</style>
