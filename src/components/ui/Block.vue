<template>
<div :class="data.photoPosition" class="block">
  <div v-if="data.photoPosition == 'right'" class="description">
    <slot></slot>
  </div>
  <div class="picture-wrapper">
    <div class="picture">
      <img :src="data.photoURL" :alt="data.photoDesc" width="100%">
    </div>
  </div>  
  <div v-if="data.photoPosition == 'left'" class="description">
    <slot></slot>
  </div>
</div>
 
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

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
  @include genericCard("false");
  margin-right: 20px;
}

.right .picture {
  @include genericCard("false");
  margin-left: 20px;
}

img {
  // width: auto;
  // height: auto;
  border-radius: $border-radius;
  display: block;
}
</style>
