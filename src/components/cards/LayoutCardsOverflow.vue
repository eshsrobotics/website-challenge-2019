<template>
  <div class="cards-wrapper-overflow">
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

.cards-wrapper-overflow {
  display: flex;

}

.cards-wrapper-overflow > * {
  margin-right: 20px;
}

</style>

