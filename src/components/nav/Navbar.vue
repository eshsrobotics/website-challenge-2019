<template>
  <nav class="nav">
    <ul id="list">
      <!-- I do not really like explicitly saying which components have an hr at the bottom, but
      that is one of the most simplest ways to do it -->
      <li id="image"> <img src="@/assets/robotics-logo.png" alt="Robotics Logo" height="30px"> </li>
      <nav-bar-item routeTo="/">Home</nav-bar-item>
       <nav-bar-item-dropdown routeTo="/about" dropdownTitle="About Us">
        <nav-bar-item routeTo="/about/team" :hrBelow="true">Team</nav-bar-item>
         <nav-bar-item route-to="/about/join-us">Join Us</nav-bar-item>
        <nav-bar-item routeTo="/about/website">Website</nav-bar-item>
      </nav-bar-item-dropdown>
      <nav-bar-item routeTo="/cyberpatriots">Cyberpatriots</nav-bar-item>
      <nav-bar-item routeTo="/frc">FRC</nav-bar-item>
      <nav-bar-item routeTo="/vex">VEX</nav-bar-item>
      <nav-bar-item-dropdown routeTo="/resources" dropdownTitle="Resources">
        <nav-bar-item routeTo="/resources/branding" :hrBelow="true">Branding Guidelines</nav-bar-item>
        <nav-bar-item routeTo="/resources/photos" :hrBelow="true">Photos</nav-bar-item>
        <nav-bar-item routeTo="/resources/videos">Videos</nav-bar-item>
      </nav-bar-item-dropdown>
      <nav-bar-item-dropdown routeTo="/sponsors" dropdownTitle="Sponsors">
        <nav-bar-item routeTo="/sponsors/us">Sponsor Us</nav-bar-item>
      </nav-bar-item-dropdown>
    </ul>
  </nav>
</template>

<script>
import NavBarItem from '@/components/nav/NavbarItem'
import NavBarItemDropdown from '@/components/nav/NavbarItemDropdown'

export default {
  components: {
    'nav-bar-item': NavBarItem,
    'nav-bar-item-dropdown': NavBarItemDropdown
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

#list {
  @include resetSpacing();
  display: flex;
  flex-direction: row;
  justify-content: left;
  user-select: none;
  list-style-type: none;
  margin: 5px 5px 5px 5px;

  li#image {
    padding: 0;
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

