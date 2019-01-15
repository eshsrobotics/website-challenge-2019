<template>
  <div class="home">
    <page-desc>
      <p>We're a club located in the <b>heart of El Segundo</b>, We have a <b>strong passion</b> for robotics, programming, engineering, and anything related.</p>
     <p>The team resides in the South Bay at <a href="https://www.elsegundohigh.org" target="_blank">El Segundo High School</a>.</p>
    </page-desc>

    <page-desc>
      <h2>About</h2>
      <p>El Segundo High School robotics contains three programs: CyberPatriots, FRC, and VEX. Each program integrates the discipline of engineering differently. For example, CyberPatriots is more geared to Computer Science skills while FRC and VEX are concerned more with tangible, mechanical products. Student captains oversee each program, but are unified by core values a common goal. Read more about the team below or lean more about each program.</p>
      <router-link to="/about">
        <c-button> About the Team</c-button>
      </router-link>
      <br/>
      <br/>
    </page-desc>

    <h2>Programs</h2>
    <layout-cards-fit class="competitions">
      <card-generic :cardInfo="competitions.cyberpatriots" class="competition">
        <p><b>Meets Fridays</b><br/></p>
      </card-generic>
      <card-generic :cardInfo="competitions.frc" class="competition">
        <p><b>Meets Thursdays</b><br/></p>
      </card-generic>
      <card-generic :cardInfo="competitions.vex" class="competition">
        <p><b>Meets Wednesdays</b><br/></p>
      </card-generic>
    </layout-cards-fit>


    <h2>We thank our wonderful sponsors</h2>
      <infinite-slide-bar duration="50s" width="3130px">
        <div class="carousel">
          <card-sponsor v-for="sponsor in sponsors" :sponsor="sponsor" v-if="sponsor.tier !== 'calculating'" :key="sponsor.name"></card-sponsor>
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
import CButton from '@/components/ui/CButton'

export default {
  name: 'home',
   data() {
    let placeHolder = 'https://dummyimage.com/1280x960/dee2e6/212529'
    return {
    sponsors: SponsorData,
      competitions: {
        cyberpatriots: {
          title: "CyberPatriots",
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/cyberpatriots-competition-prep/cyberPatriots9.small.jpg?raw=true',
          imageAltText: "Alt text",
          desc: "Small teams search computer systems for vulnerabilities and exploits. As you compete, gain points for every vulnerability that is patched.",
          buttonText: "Learn More",
          buttonRouteTo: "/cyberpatriots"
        },
        frc: {
          title: "FRC",
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition/frccompetition59.small.jpg?raw=true',
          imageAltText: "Alt text",
          desc: "Brainstorm, plan, and execute the fabrication of a large robot within a span of 6-weeks. We'll teach you what skills you need to succeed.",
          buttonText: "Learn More",
          buttonRouteTo: "/frc"
        },
        vex: {
          title: "VEX",
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vrc-generic-photos/vex7.small.jpg?raw=true',
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
    'card-sponsor': CardSponsor,
    'c-button': CButton
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
