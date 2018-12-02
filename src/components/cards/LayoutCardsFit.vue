<template>
  <div class="cards-wrapper-fit">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'layoutCardsFit',
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.cards-wrapper-fit {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  margin: 10px 0px 30px 0px; 
}
</style>

