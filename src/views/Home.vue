<template>
  <div class="home">
    <page-desc>
      <p>We're a club located in the <b>heart of El Segundo</b>, We have a <b>strong passion</b> for robotics, programming, engineering, and anything related.</p>
      <p>The team resides in the South Bay at El Segundo High School.</p>
    </page-desc>

    <h2>Competitions</h2>
    <layout-cards-fit class="competitions">
      <competition-card showCompetition="cyberpatriots"></competition-card>
      <competition-card showCompetition="frc"></competition-card>
      <competition-card showCompetition="vex"></competition-card>
    </layout-cards-fit>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CompetitionCard from '@/components/cards/CompetitionCard'
import LayoutCardsFit from '@/components/cards/LayoutCardsFit'

export default {
  name: 'home',
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
