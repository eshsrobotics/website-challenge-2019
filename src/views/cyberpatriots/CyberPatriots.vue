<template>
  <div class="cyberpatriots">
    <page-desc>
      <h1>CyberPatriots</h1>
      <p>The competition puts teams of students in the position of newly hired IT professionals tasked with managing the network of a small company. In the rounds of competition, teams are given a set of virtual images that represent operating systems and are tasked with finding cybersecurity vulnerabilities within the images and hardening the system while maintaining critical services.</p>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';

export default {
  name: 'cyberpatriots',
  data() {
    return {
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
    'page-desc': PageDesc
  }
}
</script>
