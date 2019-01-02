<template>
  <div class="frc">
    <c-block :blockData="frcBlock">
      <h2>About</h2>
      <p>FRC is a multifaceted competition that involves many engineering disciplines. Students must know how to design a robot frame from raw ideas, fabricate one with various materials, 3D model them in computer aided design (CAD) applications, create networks that allow the robot to communicate with the main computer, and finally program the robot. One team containing tens of people must build a fully functional robot that satisfy operating constraints during competition. These includes dimensional and constraints. Final fabrication of robot would include optimized features that maximized points during actual competition. Preparation time for the competition consists of a narrow 6 week time interval. This competition models real-world engineering closely. </p>
    </c-block>
  </div>
</template>

<script>
import CBlock from '@/components/ui/Block'

export default {
  name: 'frc',
  data() {
    return {
      frcBlock: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/frc-competition/frccompetition5.jpg?raw=true',
        imageAltText: 'Dummy Image',
        photoPosition: 'right'
      },
      quickLinks: [
        {
          "name": "Official FRC Website",
          "url": "https://www.firstinspires.org/robotics/frc",
          "desc": "Everything you need to get started for building an FRC robot"
        },
        {
          "name": "Team Wiki",
          "url": "https://github.com/eshsrobotics/database/wiki/FRC",
          "desc": "Our team's FRC Wiki"
        },
        {
          "name": "Discord Server",
          "url": "https://discordapp.com/invite/frc",
          "desc":  "Unofficial FRC Discord server"
        },
        {
          "name": "Unofficial Forums",
          "url": "https://www.chiefdelphi.com/forums/portal.php",
          "desc": "Unofficial forums website"
        },
        {
        "name": "Official Tutorials",
        "url": "https://wpilib.screenstepslive.com/s/currentCS",
        "desc": "Official tools and tutorials for software and hardware"
        }
      ]
    }
  },
  components: {
    'c-block': CBlock
  }
}
</script>
