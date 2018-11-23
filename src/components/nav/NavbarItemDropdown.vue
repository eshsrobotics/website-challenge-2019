<template>
  <div class="dropdown">
    <nav-bar-item :routeTo="routeTo" class="dropdown-title">{{ dropdownTitle }}</nav-bar-item> 
    <ul class="child-navbar-items" ref="navbar-items">
        <slot></slot> 
    </ul>
  </div>
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

ul {
  list-style-type: none;
}

.dropdown {
  position: relative;
}

.child-navbar-items {
  visibility: hidden;
  // opacity: 0;
  position: absolute;
  // top: 100%;
  // left: 0;
  // z-index: -1;
  // transition: all $transition-duration ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
  // display: block;

  & > * {
    margin-top: 5px;
  }
}

.dropdown:focus .child-navbar-items,
.dropdown:focus-within .child-navbar-items,
.dropdown:hover .child-navbar-items {
  visibility: visible;
  // opacity: 1;
  // z-index: 1;
  // transform: translateY(0%);
  // transition-delay: 0s, 0s, $transition-duration; /* this removes the transition delay so the menu will be visible while the other styles transition */
}
</style>