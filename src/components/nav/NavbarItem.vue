<template>
    <router-link :to="routeTo" tag="li">
        <p><slot></slot></p>
    </router-link>
</template>

<script>
export default {
  props: {
    'routeTo': String,  
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

li {
  margin: 0px 5px 0px 5px;
  background-color: $std-bg-reg;
  border-radius: $border-radius-small;

  &:hover {
    cursor: pointer;
    background-color: $std-bg-hov;
  }

  &.router-link-exact-active {
    background-color: $oc-gray-3;
  }
}

p {
  @include resetSpacing();
  font-family: 'poppins', sans-serif;
  color: $oc-gray-9;
  text-decoration: none;
  padding: 10px 15px;
  line-height: 100%;
}

.router-link-exact-active p {
  color: $team-green;
  font-weight: bold;
}

a {
  text-decoration: none;
}
</style>

