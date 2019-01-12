<template>
  <div :class="blockData.photoPosition" class="block">
    <div class="picture">
      <card-generic :cardInfo="blockData"></card-generic>
    </div>
    <div v-if="blockData.photoPosition == 'right'" class="description">
      <slot></slot>
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
  /*display: block;*/
}

.block {
  margin-bottom: 20px;
}

.block.left {
  height: 100%;

  .picture {
    float: left;
  }
}

.block.right {
  height: 100%;

  .picture {
    float: right;
  }
}

.block::after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}

.left .picture {
  margin-right: 20px;
}

.right .picture {
  margin-left: 20px;
}

.picture {
  width: 30vw;
  min-width: 350px;
  max-width: 600px;
}

@media(max-width: 550px) {
  .block.left {
    display: flex;
    flex-direction: column-reverse;
  }

  .block.right {
    display: flex;
    flex-direction: column-reverse;
  }

  .picture {
    width: 100%;
  }
}
</style>
