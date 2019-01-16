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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(min-content, min-content);
  grid-auto-flow: dense;
  grid-gap: 10px;
}

.cards-struct * {
  display: inline-block;
  /*height: 100%;*/
  margin-bottom: auto;
  min-height: 0;

}
</style>

