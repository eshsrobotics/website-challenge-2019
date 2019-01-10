<template>
  <div :class="blockData.photoPosition" class="block">
    <div v-if="blockData.photoPosition == 'right'" class="description">
      <slot></slot>
    </div>
    <div class="picture">
      <card-generic :cardInfo="blockData"></card-generic>
    </div>
    <div v-if="blockData.photoPosition == 'left'" class="description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CardGeneric from '@/components/card/CardGeneric'

export default {
  name: 'block',
  props: {
    blockData: {
      type: Object,
      default: () => ({
        image: 'https://dummyimage.com/1280x960/dee2e6/212529',
        imageAltText: 'Block element image default text'
      })
    }
  },
  components: {
    'card-generic': CardGeneric
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

h1 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 5px;
}

img {
  border-radius: $border-radius;
  display: block;
}

.block.left {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 30px;
}

.block.right {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 30px;
}

.left .picture {
  margin-right: 20px;
}

.right .picture {
  margin-left: 20px;
}
</style>
