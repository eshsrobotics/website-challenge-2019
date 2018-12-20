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
  grid-template-columns: repeat(auto-fill, 325px); // TODO: Fix this temporary fix
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 15px;
}
</style>

