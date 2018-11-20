<template>
  <div class="home">
    <page-desc>
      <h1>E.S.H.S. Robotics Club</h1>
      <p>The ESHS Robotics Club is made up of a conglomerate of teams competing in various robotics and computer science competitions which all share the same mission. To teach and expose kids about the fundamentals of Science and Engineering. Collectively we are known as The P.O.T.A.T.O.E.S. or People Of Tomorrow Applying Their Outstanding Engineering Skills.</p>
    </page-desc>

    <div class="competitions">
      <competition-card comp="cyberpatriots"></competition-card>
      <competition-card comp="frc"></competition-card>
      <competition-card comp="vex"></competition-card>
    </div>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';
import CompetitionCard from '@/components/CompetitionCard';

export default {
  name: 'home',
  components: {
    'page-desc': PageDesc,
    'competition-card': CompetitionCard
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.competitions {
  display: flex;

  &> :first-child {
    width: auto;
  }
}
</style>
