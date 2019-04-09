<template>
  <div class="frc">
    <c-block :blockData="frcBlock">
      <h2>About</h2>
      <p>FRC is a multifaceted competition that involves many engineering disciplines. Students must know how to design a robot frame from raw ideas, fabricate one with various materials, 3D model them in computer aided design (CAD) applications, create communication networks, and program the robot.</p>
      <p>One team containing tens of people must build a fully functional robot that satisfy operating constraints during competition. These range from controlling the size of the robot to how the robot must gain points. The final version of the robot aims to include the optimum features that maximizes points during the actual competition. However, because the robot must be completed within 6 weeks shortcuts are sometimes made to complete the robot in time. This competition models real-world engineering closely.</p>
      <p>FRC meets every Thursday. However, contributing on other days, including weekends may be required, especially during build season.</p>
    </c-block>
    <p>Learn more about the FRC competition by visiting the team's wiki page</p>
    <a href="https://github.com/eshsrobotics/database/wiki/FRC" target="_blank">
      <c-button>Learn More</c-button>
    </a>
    <br/><br/>

    <h2>FRC Photo Album</h2>
    <infinite-slide-bar duration="70s" width="3600px">
      <div class="carousel">
        <card-generic :cardInfo="previewPhotos[0]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[1]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[2]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[3]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[4]" class="competition"></card-generic>
      </div>
    </infinite-slide-bar>
    <router-link to="/album/2018-2019-frc-competition">
      <c-button>See More</c-button>
    </router-link>
  </div>
</template>

<script>
import CBlock from '@/components/ui/Block'
import CButton from '@/components/ui/CButton'
import CardGeneric from '@/components/card/CardGeneric'

export default {
  name: 'frc',
  data() {
    return {
      frcBlock: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/frc-competition/frccompetition5.small.jpg?raw=true',
        imageAltText: 'Team photograph taken at the FRC 2018-2018 competition day',
        photoPosition: 'right'
      },
      previewPhotos: [
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/frc-la-regional-competition/DSC00191.small.jpg?raw=true',
          imageAltText: "Group photograph during final competition",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/frc-la-regional-competition/DSC00187.small.jpg?raw=true',
          imageAltText: "Corner shot of the FRC robot",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/frc-la-regional-competition/DSC00271.small.jpg?raw=true',
          imageAltText: "Two team membersstanding in front of the robot",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/frc-la-regional-competition/DSC00199.small.jpg?raw=true',
          imageAltText: "FRC Robot on the playing ground",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/frc-la-regional-competition/DSC00212.small.jpg?raw=true',
          imageAltText: "Team's robot attempting to pick up an orange ball",
        }
      ],
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
    'c-block': CBlock,
    'c-button': CButton,
    'card-generic': CardGeneric
  }
}
</script>

<style scoped lang="scss">
  .carousel {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;

  & * {
      margin: 10px 10px 10px 10px;
      width: 500px;
    }
  }
</style>
