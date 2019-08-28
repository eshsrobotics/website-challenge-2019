<template>
  <div class="video-wrapper">
    <card-generic class="generic" style="width: 560px !important;">
        <iframe class="frame" width="560" height="315" :src="'https://www.youtube-nocookie.com/embed/' + videoId " frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </card-generic>
  </div>
</template>

<script>
import CardGeneric from '@/components/card/CardGeneric'

export default {
  name: "Video",
  props: {
    playerHeight: {
      type: [String, Number],
      default: '360'
    },
    playerWidth: {
      type: [String, Number],
      default: '640'
    },
    playerVars: {
      type: Object,
      default: () => ({ autoplay: 0, time: 0 })
    },
    videoId: {
      type: String
    },
    mute: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'card-generic': CardGeneric
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>
