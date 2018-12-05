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
  name: 'block',
  props: {
    data: Object
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
  // width: auto;
  // height: auto;
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
  @include genericCard("false");
  margin-right: 20px;
}

.right .picture {
  @include genericCard("false");
  margin-left: 20px;
}

</style>
