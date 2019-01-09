<template>
  <div class="frc">
    <c-block :blockData="frcBlock">
      <h2>About</h2>
      <p>FRC is a multifaceted competition that involves many engineering disciplines. Students must know how to design a robot frame from raw ideas, fabricate one with various materials, 3D model them in computer aided design (CAD) applications, create communication networks, and program the robot.</p>
      <p> One team containing tens of people must build a fully functional robot that satisfy operating constraints during competition. These range from controlling the size of the robot to how the robot must gain points. The final version of the robot aims to include the optimum features that maximizes points during the actual competition. However, because the robot must be completed within 6 weeks shortcuts are sometimes made to complete the robot in time. This competition models real-world engineering closely.</p>
      <p>FRC meets every Thursday. However, contributing on other days, including weekends may be required, especially during build season.</p>
    </c-block>

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
    <router-link to="/resources/album/2017-2018-frc-competition">
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
        imageAltText: 'Dummy Image',
        photoPosition: 'right'
      },
      previewPhotos: [
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/frc-competition-prep-kickoff/DSC07594.small.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition/frccompetition14.small.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition-prep/frcbot6.small.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition/frccompetition36.small.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/frc-competition/frccompetition1.small.jpg?raw=true',
          imageAltText: "Alt text",
        },
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
