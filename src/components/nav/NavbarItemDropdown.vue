<template>
  <li class="dropdown">
    <nav-bar-item :routeTo="routeTo" class="dropdown-title">
      {{ dropdownTitle }}
    </nav-bar-item> 
    <ul class="dropdown-items" ref="navbar-items">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import NavBarItem from '@/components/nav/NavbarItem'

  export default {
    props: {
      routeTo: String,
      dropdownTitle: String
    },
    components: {
      'nav-bar-item': NavBarItem
    }
  }
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.dropdown {
  position: relative;
}

.dropdown-items {
  position: absolute;
  left: 5px;

  // margin-top: 5px;
  box-sizing: border-box;
  border-radius: $border-radius-small;
  list-style-type: none;

  background-color: $oc-gray-1;

  visibility: hidden;

  & > * {
    margin-top: 5px;
  }
}

.dropdown:focus .dropdown-items,
.dropdown:focus-within .dropdown-items,
.dropdown:hover .dropdown-items {
  visibility: visible;
  // opacity: 1;
  // z-index: 1;
  // transform: translateY(0%);
  // transition-delay: 0s, 0s, $transition-duration; /* this removes the transition delay so the menu will be visible while the other styles transition */
}
</style>