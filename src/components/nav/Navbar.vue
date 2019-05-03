<template>
  <nav class="nav">
    <ul id="list">
      <router-link to="/">
        <li class="image"> <img src="@/assets/robotics-logo.png" alt="Robotics Logo" height="42px"> </li>
      </router-link>
      <nav-bar-item routeTo="/">Home</nav-bar-item>
       <nav-bar-item-dropdown routeTo="/about" dropdownTitle="About Us">
        <nav-bar-item routeTo="/about/team">Team</nav-bar-item>
         <nav-bar-item route-to="/about/join-us">Join Us</nav-bar-item>
        <nav-bar-item routeTo="/about/website">Website</nav-bar-item>
      </nav-bar-item-dropdown>
      <nav-bar-item routeTo="/cyberpatriots">Cyberpatriots</nav-bar-item>
      <nav-bar-item routeTo="/frc">FRC</nav-bar-item>
      <nav-bar-item routeTo="/vex">VEX</nav-bar-item>
      <!--<nav-bar-item-dropdown routeTo="/resources" dropdownTitle="Resources">-->
        <nav-bar-item routeTo="/photos">Photos</nav-bar-item>
        <!--<nav-bar-item routeTo="/resources/videos">Videos</nav-bar-item>-->
      <!--</nav-bar-item-dropdown>-->
      <nav-bar-item-dropdown routeTo="/sponsors" dropdownTitle="Sponsors">
        <nav-bar-item routeTo="/sponsors/us">Sponsor Us</nav-bar-item>
      </nav-bar-item-dropdown>
    </ul>

    <ul id="list-small-screen">
      <div class="image"> <img src="@/assets/robotics-logo.png" alt="Robotics Logo" height="42px"> </div>
      <div @click="toggleMobileMenu">
        <svg class="feather feather-menu" :class="{ smaller: shrinkHamburger}" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="#212529" stroke="#212529" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6">
          </line><line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
    </ul>

    <div :class="{ active: mobileMenuActive }" class="mobile-menu">
      <div class="mobile-menu-inner">
        <!--<div class="image" id="four"><img src="@/assets/robotics-logo.png" alt="Robotics Logo" height="42px"> </div>-->
        <div @click="toggleMobileMenu">
          <svg class="feather feather-menu" :class="{ smaller: shrinkHamburger}" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="#212529" stroke="#212529" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6">
            </line><line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>

        <!--<mobile-menu-dropdown>-->
        <!--<mobile-menu-button slot="the"><p>Home</p></mobile-menu-button>-->
        <!--</mobile-menu-dropdown>-->
        <div class="routes" @click="toggleMobileMenu">
          <router-link to="/">
            <mobile-menu-button><p>Home</p></mobile-menu-button>
          </router-link>
          <router-link to="/about">
            <mobile-menu-button><p>About Us</p></mobile-menu-button>
          </router-link>
          <router-link class="indent" to="/about/team">
            <mobile-menu-button><p>Team</p></mobile-menu-button>
          </router-link>
          <router-link class="indent" to="/about/join-us">
            <mobile-menu-button><p>Join Us</p></mobile-menu-button>
          </router-link>
          <router-link class="indent" to="/about/website">
            <mobile-menu-button><p>Website</p></mobile-menu-button>
          </router-link>
          <router-link to="/cyberpatriots">
            <mobile-menu-button><p>CyberPatriots</p></mobile-menu-button>
          </router-link>
          <router-link to="/frc">
            <mobile-menu-button><p>FRC</p></mobile-menu-button>
          </router-link>
          <router-link to="/vex">
            <mobile-menu-button><p>VEX</p></mobile-menu-button>
          </router-link>
          <router-link to="/photos">
            <mobile-menu-button><p>Photos</p></mobile-menu-button>
          </router-link>
          <router-link to="/sponsors">
            <mobile-menu-button><p>Sponsors</p></mobile-menu-button>
          </router-link>
          <router-link class="indent" to="/sponsor-us">
            <mobile-menu-button><p>Sponsors</p></mobile-menu-button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarItem from '@/components/nav/NavbarItem'
import NavBarItemDropdown from '@/components/nav/NavbarItemDropdown'
import MenuMobileButton from '@/components/ui/MenuMobileButton'
import MobileMenuDropdown from '@/components/MobileMenuDropdown'

export default {
  name: 'navbar',
  data() {
    return {
      mobileMenuActive: false,
      shrinkHamburger: false,
    }
  },
  methods: {
    toggleMobileMenu: function() {
      this.mobileMenuActive = !this.mobileMenuActive

      this.shrinkHamburger = !this.shrinkHamburger

      setTimeout(() => {
        this.shrinkHamburger = !this.shrinkHamburger
      }, 70)
    }
  },
  components: {
    'nav-bar-item': NavBarItem,
    'nav-bar-item-dropdown': NavBarItemDropdown,
    'mobile-menu-button': MenuMobileButton,
    'mobile-menu-dropdown': MobileMenuDropdown
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
  list-style-type: none;
  margin: 5px 5px 5px 5px;
}

li.image {
  padding: 0;
  background-color: inherit;
  display: flex;
  /*justify-content: center;*/
  /*align-items: center;*/
}

.feather-menu:hover {
  transform: scale(1.1, 1.2);
  cursor: pointer;
  transition: createTransitions((all));
}
// When user hovers over hamburger menu and clicks, this class activates so that it looks hamburger menu shrinks slightly, then goes back
.feather-menu.smaller {
  transform: scale(0.92, 0.92);
  transition: createTransitions((all)) +
              createTransitions((transform), false, 0.3s);
}

#list-small-screen {
  display: none;
}

.mobile-menu {
  @include resetSpacing();
  visibility: hidden;
  /*width: 100vw;*/
  max-height: calc(100vh - 20px);
  opacity: 0;
  overflow: hidden;
  transform: translateY(15px);
  transition: createTransitions((all));
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  /*max-height: 100%;*/
}

a {
  text-decoration: none !important; // I've done this too many times :/
}

.mobile-menu.active {
  bottom: auto;
  visibility: visible;
  background-color: white;
  overflow: hidden;
  max-height: inherit;
  margin-bottom: 20px;

  opacity: 1;
  transform: translateY(0);
  transition: createTransitions((all));

  svg {
    display: block;
    float: right;
    margin: 5px 5px 5px 10px;
    padding-right: 20px;
  }
}

.routes {
  padding-right: 20px;
  padding-left: 20px;
}

.indent .mobile-menu-item {
  margin-left: 40px;
}

.mobile-menu-inner {
  display: flex;
  flex-direction: column;
}
@media(max-width: $mobileWidth) {
  #list {
    display: none;
  }

  #list-small-screen {
    @include resetSpacing();
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    margin: 5px 5px 5px 5px;
  }
}
</style>

