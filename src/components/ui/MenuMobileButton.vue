<template>
  <div class="mobile-menu-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MenuMobileButton"
  }
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

  .mobile-menu-item {
    border: 1px solid $oc-gray-7;
    padding: 10px 19px 10px 19px;
    margin: 10px 5px 5px 5px;
    background-color: inherit;
    border-radius: $border-radius-small;
    transition: createTransitions((all));


  &:hover {
    cursor: pointer;
    background-color: $oc-yellow-2;
    transition: createTransitions((all));
  }

  p {
    font-size: 1.25em;
    font-weight: bold;
    font-family: 'poppins', sans-serif;
  }
}
</style>