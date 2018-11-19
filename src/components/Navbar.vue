<template>
  <nav id="nav">
    <ul id="list">
      <li id="image"> <img src="@/assets/robotics-logo.png" alt="Robotics Logo" height="30px"> </li>
      <li> <router-link to="/">Home</router-link> </li>
      <li> <router-link to="/team">Our Team</router-link> </li>
      <li> <router-link to="/sponsors">Sponsors</router-link> </li>
      <li> <router-link to="/blog">Blog</router-link> </li>
      <li> <router-link to="/resources">Resources</router-link> </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

#list {
  @include resetSpacing();
  display: flex;
  flex-direction: row;
  justify-content: left;
  user-select: none;
  list-style-type: none;

  li {
    padding: 10px 15px;
    margin: 10px 5px 0px 5px;
    background-color: $oc-gray-1;
    border-radius: $border-radius-small;
  }

  li#image {
    padding: 0px;
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    font-family: 'Robot', sans-serif;
    color: $oc-gray-9;
    text-decoration: none;

    &.router-link-exact-active {
      color: $team-green;
      font-weight: bold;
    }
  }
}

</style>

