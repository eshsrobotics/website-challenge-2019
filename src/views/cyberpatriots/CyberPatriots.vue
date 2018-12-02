<template>
  <div class="cyberpatriots">
    <c-block :data="cypatBlock">
      <h2>About</h2>
      <p>The competition puts teams of students in the position of newly hired IT professionals tasked with managing the network of a small company. In the rounds of competition, teams are given a set of virtual images that represent operating systems and are tasked with finding cybersecurity vulnerabilities within the images and hardening the system while maintaining critical services.</p>
    </c-block>
  </div>
</template>

<script>
import CBlock from '@/components/ui/Block'

export default {
  name: 'cyberpatriots',
  data() {
    return {
      cypatBlock: {
        photoURL: 'https://dummyimage.com/1280x720/dee2e6/212529',
        photoDesc: 'Dummy Image',
        photoPosition: 'right'
      },
      quickLinks: [
        {
          "name": "Official Website",
          "url": "https://www.uscyberpatriot.org/",
          "desc": "Official CyberPatriots Website"
        }
      ]
    }
  },
  components: {
    'c-block': CBlock
  }
}
</script>
