<template>
  <div class="resources">
    <page-desc>
      <h2>Photos</h2>
      <p>The Robotics Competition adds nearly all photographs to the database-photos repository on GitHub. High quality photographs from <a href="https://github.com/eshsrobotics/database-photos">this
        repository</a> can be accessed through this web interface. Choose to view all the photographs down below.</p>
      <router-link to="/resources/photos">
        <c-button>View</c-button>
      </router-link>
      <h2>Videos</h2>
      <p>Videos are handpicked. Usually, videos detail the FRC or VEX team's performance during competition. However, you may also find videos that describe each competition or videos that the team took during or before the competition.</p>
      <router-link to="/resources/videos">
        <c-button>View</c-button>
      </router-link>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CButton from '@/components/ui/CButton'

export default {
  name: 'resources',
  data() {
    return {

    }
  },
  components: {
    'page-desc': PageDesc,
    'c-button': CButton
  }
}
</script>
