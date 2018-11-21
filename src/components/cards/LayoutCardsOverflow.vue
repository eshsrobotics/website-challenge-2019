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

}

.cards-overflow > * {
  margin-right: 20px;
}

</style>

