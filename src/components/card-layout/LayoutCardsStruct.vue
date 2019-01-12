<template>
  <div class="cards-struct">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'layoutCardsStruct',
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.cards-struct {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // TODO: Fix this temporary fix
  grid-template-rows: repeat(auto-fill, 1fr);
  /*!*grid-auto-flow: dense;*!*/
  /*display: grid;*/
  /*grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));*/
  /*grid-auto-rows: 200px;*/
  /*grid-auto-flow: dense;*/
  grid-gap: 1em;
}

.cards-struct * {
  display: inline-block;
}
</style>

