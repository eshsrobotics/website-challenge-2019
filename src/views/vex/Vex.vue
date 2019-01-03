<template>
  <div class="vex">
    <c-block :blockData="vexBlock">
      <h2>About</h2>
      <p>Teams of students work together to design, program, and build a robot that competes with other teams. Each robot is designed to complete a certain objective or goal, which changes annually. During competition, a red and blue alliance battle it out. Each alliance has two teams. This means that your team will be cooperating with another team. The objective is to collect as many points possible within the time restriction.</p>
      <p>Students learn to build robots using VEX parts, program a robot using RobotC, and design their VEX Robot using Autodesk Inventor.</p>
    </c-block>
  </div>
</template>

<script>
import CBlock from '@/components/ui/Block'

export default {
  name: 'vex',
  data() {
    return {
      vexBlock: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vex-competition-prep/vex8.jpg?raw=true',
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
