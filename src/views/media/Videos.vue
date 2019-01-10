<template>
  <page-desc class="videos">
    <p>Not implemented yet</p>
    <c-video video-id="CDDGBcs0TFM"></c-video>
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
</style>