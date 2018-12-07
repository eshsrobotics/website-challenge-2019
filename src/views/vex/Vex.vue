<template>
  <div class="vex">
    <c-block :blockData="vexBlock">
      <h2>About</h2>
      <p>Teams of students work together to design, program, and build a robot that competes with other robots from other teams. Each robot is designed to complete a certain objective or goal, which changes annually. Students learn to build robots using VEX parts, program a robot using RobotC, and design their VEX Robot using Autodesk Inventor. Two alliances, each with two robots, battle on the field, collecting as many points possible within the time restriction.</p>
    </c-block>
  </div>
</template>

<script>
import CBlock from '@/components/ui/Block';

export default {
  name: 'vex',
  data() {
    return {
      vexBlock: {
        image: 'https://dummyimage.com/1280x720/dee2e6/212529',
        imageAltText: 'Dummy Image',
        photoPosition: 'right'
      },
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
    'c-block': CBlock
  }
}
</script>
