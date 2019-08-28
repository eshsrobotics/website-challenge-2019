<template>
  <page-desc class="videos">
    <p>Not implemented yet</p>
    <div class="u">
      <c-video class="video" video-id="CDDGBcs0TFM"></c-video>
      <c-video class="video" video-id="1Yo_mlR1VJU"></c-video>
    </div>
  </page-desc>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CVideo from '@/components/ui/CVideo'


export default {
  name: 'videos',
  components: {
    'page-desc': PageDesc,
    'c-video': CVideo
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.video {
  margin: 15px;
}

.u {
  display: flex;
  flex-wrap: wrap;

  & * {
    display: inline !important;
  }
}

@media(max-width: 700px) {
  .u {
  }
}
</style>
