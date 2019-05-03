<template>
  <div class="cards-overflow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'layoutCardsOverflow',
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.cards-overflow {
  display: flex;
  flex-wrap: wrap;
  height: 0%;
  /*max-height: 100%;*/

  /*display: grid;*/
  /*grid-template-columns: repeat(auto-fill, minmax(1fr, 250px));*/
  /*!*grid-auto-rows: minmax(min-content, min-content);*!*/
  /*grid-gap: 10px;*/
}

.cards-overflow > * {
  margin-right: 20px;
  height: 0%;
  /*max-height: 100%;*/
}
</style>

