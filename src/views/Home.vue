<template>
  <div class="home">
    <page-desc>
      <template name="title">
       <h1>E.S.H.S. Robotics Club</h1>
      </template>
      <template name="description">
        <p>The ESHS Robotics Club is made up of a conglomerate of teams competing in various robotics and computer science competitions which all share the same mission. To teach and expose kids about the fundamentals of Science and Engineering. Collectively we are known as The P.O.T.A.T.O.E.S. or People Of Tomorrow Applying Their Outstanding Engineering Skills.</p>
      </template>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';

export default {
  name: 'home',
  components: [
    PageDesc
  ]
}
</script>
