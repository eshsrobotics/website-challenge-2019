<template>
  <li class="dropdown">
    <nav-bar-item :routeTo="routeTo" class="dropdown-title">
      {{ dropdownTitle }}
    </nav-bar-item> 
    <ul class="dropdown-items">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import NavBarItem from '@/components/nav/NavbarItem'

export default {
name: 'navbarItemDropdown',
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
  z-index: 100;
}

.dropdown:hover .dropdown-items {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: createTransitions((all));
}

.dropdown-items {
  position: absolute;
  left: 5px;
  list-style-type: none;
  background-color: $std-bg-reg;
  border-radius: $border-radius-small;
  visibility: hidden;
  opacity: 0;
  transform: translateY(8px);
  transition: createTransitions((all));

  & > * {
    margin-top: 5px;
  }
}
</style>
