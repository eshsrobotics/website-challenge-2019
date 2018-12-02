<template>
  <nav class="nav">
    <ul id="list">
      <li id="image"> <img src="@/assets/robotics-logo.png" alt="Robotics Logo" height="30px"> </li>
      <nav-bar-item routeTo="/">Home</nav-bar-item>
       <nav-bar-item-dropdown routeTo="/about" dropdownTitle="About Us">
        <nav-bar-item routeTo="/about/team">Team</nav-bar-item>
        <nav-bar-item routeTo="/about/coaches-and-mentors">Coaches and Mentors</nav-bar-item>
        <nav-bar-item routeTo="/about/officers">Officers</nav-bar-item>
        <nav-bar-item routeTo="/about/website/more-info">Website</nav-bar-item>
      </nav-bar-item-dropdown>
      <nav-bar-item routeTo="/cyberpatriots">Cyberpatriots</nav-bar-item>
      <nav-bar-item routeTo="/frc">FRC</nav-bar-item>
      <nav-bar-item routeTo="/vex">VEX</nav-bar-item>
      <nav-bar-item-dropdown routeTo="/resources" dropdownTitle="Resources">
        <nav-bar-item routeTo="/resources/links">Quick Links</nav-bar-item>
        <nav-bar-item routeTo="/resources/branding">Branding Guidelines</nav-bar-item>
      </nav-bar-item-dropdown>
      <nav-bar-item-dropdown routeTo="/media" dropdownTitle="Media">
        <nav-bar-item routeTo="/media/videos">Videos</nav-bar-item>
        <nav-bar-item routeTo="/media/photos">Photos</nav-bar-item>
      </nav-bar-item-dropdown>
      <nav-bar-item routeTo="/sponsors">Sponsors</nav-bar-item>
      <nav-bar-item routeTo="/blog">Blog</nav-bar-item>
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
    padding: 0px;
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

