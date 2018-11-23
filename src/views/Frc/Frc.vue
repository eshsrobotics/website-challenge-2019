<template>
  <div class="frc">
    <page-desc>
      <h1>FRC</h1>
      <p>Combining the excitement of sport with the rigors of science and technology. We call FIRST Robotics Competition the ultimate Sport for the Mind. High-school student participants call it “the hardest fun you’ll ever have.” Under strict rules, limited resources, and an intense six-week time limit, teams of students are challenged to raise funds, design a team “brand,” hone teamwork skills, and build and program industrial-size robots to play a difficult field game against like-minded competitors. It’s as close to real-world engineering as a student can get. Volunteer professional mentors lend their time and talents to guide each team. Each season ends with an exciting FIRST Championship.</p>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';

export default {
  name: 'frc',
  data() {
    return {
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
    'page-desc': PageDesc
  }
}
</script>
