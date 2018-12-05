<template>
  <div class="person">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: 'personCard'
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.person {
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