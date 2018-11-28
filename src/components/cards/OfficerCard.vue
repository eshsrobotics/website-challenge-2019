<template>
  <div class="officer">
    <slot></slot>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.officer {
  @include genericCard("false");
  width: 200px;
  margin-bottom: 20px;
}

h3 {
  text-align: center;
}

p {
  text-align: center;
}
</style>