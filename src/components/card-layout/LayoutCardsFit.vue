<template>
  <div class="cards-wrapper-fit">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'layoutCardsFit'
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

@media(max-width: 950px) {
  .cards-wrapper-fit {
    grid-template-columns: 1fr 1fr;
  }
}

@media(max-width: 650px) {
  .cards-wrapper-fit {
    grid-template-columns: 1fr;
  }
}
</style>

