<template>
  <li>
    <router-link :to="routeTo" tag="div" class="route-label">
      <p><slot></slot></p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'navbarItem',
  props: {
    'routeTo': String
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.route-label {
  border: 1px solid $oc-gray-7;
  margin: 0px 5px 0px 5px;
  background-color: $std-bg-reg;
  border-radius: $border-radius-small;
  margin-bottom: 5px;
  transition: createTransitions((all));

  &:hover {
    cursor: pointer;
    background-color: $oc-blue-1;
    transition: createTransitions((all));
  }

  &.router-link-exact-active {
    background-color: $oc-yellow-1;
    
    p {
      color: $team-green;
      font-weight: bold;
    }
  }
}

hr {
  border: 0;
  margin-left: 5px;
  width: calc(100% - 10px);          
  // height: 2px;
  // background-color: $oc-yellow-2;
  border-radius: $border-radius-small;
}

p {
  @include resetSpacing();
  font-family: 'poppins', sans-serif;
  color: $oc-gray-9;
  text-decoration: none;
  padding: 11px 16px;
  line-height: 100%;
}

a {
  text-decoration: none;
}
</style>
