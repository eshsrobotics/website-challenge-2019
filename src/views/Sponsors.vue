<template>
  <div class="sponsors">
    <page-desc>
       <h1>Sponsors</h1>
       <p>Here you can find all of the P.O.TA.T.O.E.S.’s sponsors. In addition to a list, you can also find out how to become a sponsor!</p>
    </page-desc>

    <sponsor-card spon="xerox"></sponsor-card>
    <sponsor-card spon="imforza"></sponsor-card>
    <sponsor-card spon="chevron"></sponsor-card>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';
import SponsorCard from '@/components/SponsorCard';

export default {
  name: 'sponsors',
  components: {
    'page-desc': PageDesc,
    'sponsor-card': SponsorCard
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.sponsors {
  display: flex;
}
</style>

