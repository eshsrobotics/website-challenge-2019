<template>
    <router-link :to="routeTo" tag="li">
        <p> {{ name }} </p>
    </router-link>
</template>

<script>
export default {
  data() {
    return {
      localVar: '/home'
    }
  },
  props: [
    'name',
    'routeTo'
  ]
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

li {
  margin: 0px 5px 0px 5px;
  background-color: $oc-gray-1;
  border-radius: $border-radius-small;

  &:hover {
    cursor: pointer;
  }

  &.router-link-exact-active {
    background-color: $oc-gray-2;
  }
}

p {
  @include resetSpacing();
  font-family: 'poppins', sans-serif;
  color: $oc-gray-9;
  text-decoration: none;
  padding: 10px 15px;
}

.router-link-exact-active p {
  color: $team-green;
  font-weight: bold;
}

a {
  text-decoration: none;
}
</style>

