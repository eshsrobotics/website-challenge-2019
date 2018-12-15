<template>
  <div class="media">
    <page-desc>
      <p>Since the 2016-2017 school year, the team keeps a record of nearly all photographs in a GitHub <a
          href="https://github.com/eshsrobotics/database-photos">repository</a>. It's a free method that allows people to view and download all our photos.</p>
      <h2>Photos</h2>
      <p>Find photos related to CyberPatriots, FRC, and VEX.</p>
      <p>Carousel through various photographs here.</p>
      <h2>Videos</h2>
      <p>See videos of the team's robots in action. Find the FRC robotic driving in competitions or see VEX robots being tested.</p>
      <p>Carousel through various videos here.</p>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';

export default {
  name: 'media',
  components: {
    'page-desc': PageDesc
  }
}
</script>
