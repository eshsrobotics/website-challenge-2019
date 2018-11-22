<template>
  <div class="vex">
    <page-desc>
      <h1>VEX</h1>
      <p>Teams of students work together to design, program, and build a robot that competes with other robots from other teams. Each robot is designed to complete a certain objective or goal, which changes annually. Students learn to build robots using VEX parts, program a robot using RobotC, and design their VEX Robot using Autodesk Inventor. Two alliances, each with two robots, battle on the field, collecting as many points possible within the time restriction.</p>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';

export default {
  name: 'vex',
  data() {
    return {
      quickLinks: [
        {
          "name": "Official VEX Website",
          "url": "https://www.vexrobotics.com/",
          "desc": "Official F.R.C. website"
        },
        {
          "name": "Team Wiki",
          "url": "https://github.com/eshsrobotics/database/wiki/VRC",
          "desc": "Our team's VEX Wiki"
        },
        {
          "name": "Discord Server",
          "url": "https://discord.gg/VUStG8p",
          "desc": "Unofficial VEX Discord server"
        }
      ]
    }
  },
  components: {
    'page-desc': PageDesc
  }
}
</script>
