<template>
  <nav class="nav">
    <ul id="list">
      <li id="image"> <img src="@/assets/robotics-logo.png" alt="Robotics Logo" height="30px"> </li>
      <nav-bar-item routeTo="/" name="Home"></nav-bar-item>
      <nav-bar-item routeTo="/about" name="About"></nav-bar-item>
      <nav-bar-item routeTo="/cyberpatriots" name="CyberPatriots"></nav-bar-item>
      <nav-bar-item routeTo="/frc" name="FRC"></nav-bar-item>
      <nav-bar-item routeTo="/vex" name="VEX"></nav-bar-item>
      <nav-bar-item routeTo="/resources" name="Resources"></nav-bar-item>
      <nav-bar-item routeTo="/media" name="Media"></nav-bar-item>
      <nav-bar-item routeTo="/sponsors" name="Sponsors"></nav-bar-item>
      <nav-bar-item routeTo="/blog" name="Blog"></nav-bar-item>
    </ul>
  </nav>
</template>

<script>
import NavBarItem from '@/components/nav/NavbarItem';
export default {
  components: {
    'nav-bar-item': NavBarItem
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

