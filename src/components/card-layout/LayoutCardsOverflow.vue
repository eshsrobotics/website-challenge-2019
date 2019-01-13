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
}

.cards-overflow > * {
  margin-right: 20px;
  height: 0%;
  /*max-height: 100%;*/
}
</style>

