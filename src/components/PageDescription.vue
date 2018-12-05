<template>
  <div class="page-desc">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pageDescription'
}
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 5px;
}

</style>