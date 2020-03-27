<script>
export default {
  name: 'vue-infinite-slide-bar',
  props: {
    barStyle: Object,
    duration: {
      type: String,
      default: '12s'
    },
    direction: {
      type: String,
      default: 'normal'
    },
    delay: {
      type: String,
      default: '0s'
    },
    width: {
      type: String,
      default: '200%'
    }
  },
  computed: {
    customStyle () {
      return {
        ...this.barStyle,
        'animation-duration': this.duration,
        'animation-direction': this.direction,
        'animation-delay': this.delay,
        'width': this.width
      }
    }
  },
  render (createElement) {
    const bar = createElement('div', { class: 'vifnslb-bar' }, this.$slots.default)
    const outerBar = createElement('div', { class: ['vifnslb-container'], style: this.customStyle }, [bar, bar])
    const leftCloud = createElement('div', { class: ['left-cloud']})
    const rightCloud = createElement('div', { class: ['right-cloud']})
    return createElement('div', { class: ['outer3'] }, [outerBar, leftCloud, rightCloud])
  }
}
</script>

<style scoped lang="scss">
@keyframes moveSlideshow {
  100% {
    transform: translateX(-50%);
  }
}
.vifnslb-container {
  transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */
  position: relative;
  overflow: hidden;
  width: 200%;
  animation-name: moveSlideshow;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.vifnslb-bar {
  float: left;
  width: 50%;
  overflow: hidden;
}

.outer3 {
  overflow: hidden;
  position: relative;
}

.left-cloud {
  position: absolute;
  // http://jsfiddle.net/x4gSG/310/
  background: linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 56%,rgba(255,255,255,1) 100%);
  top: 0;
  left: 0;
  height: 100%;
  width: 20px;
}

.right-cloud {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 56%,rgba(255,255,255,1) 100%);
  height: 100%;
  width: 20px;
}
</style>
