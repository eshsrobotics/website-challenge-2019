<template>
  <div class="frc">
    <c-block :blockData="frcBlock">
      <h2>About</h2>
      <p>FRC is a multifaceted competition that involves many engineering disciplines. Students must know how to design a robot frame from raw ideas, fabricate one with various materials, 3D model them in computer aided design (CAD) applications, create networks that allow the robot to communicate with the main computer, and finally program the robot. One team containing tens of people must build a fully functional robot that satisfy operating constraints during competition. These includes dimensional and constraints. Final fabrication of robot would include optimized features that maximized points during actual competition. Preparation time for the competition consists of a narrow 6 week time interval. This competition models real-world engineering closely. </p>
    </c-block>

    <h2>FRC Photos</h2>
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
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/frc-competition/frccompetition5.jpg?raw=true',
        imageAltText: 'Dummy Image',
        photoPosition: 'right'
      },
      previewPhotos: [
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/frc-competition-prep-kickoff/DSC07594.JPG?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition/frccompetition14.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition-prep/frcbot6.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition/frccompetition36.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/frc-competition/frccompetition1.jpg?raw=true',
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
