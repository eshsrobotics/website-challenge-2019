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
  // Temporary fix
  grid-template-columns: repeat(auto-fill, 340px);
  grid-template-rows: repeat(auto-fill, 1fr);
  /*grid-auto-flow: column;*/

  grid-gap: 15px;
}
</style>

