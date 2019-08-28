<template>
  <div class="vex">
    <c-block :blockData="vexBlock">
      <h2>About</h2>
      <p>Teams of students work together to design, program, and build a robot that competes with other teams. Each robot is designed to complete a certain objective or goal, which changes annually. During competition, a red and blue alliance battle it out. Each alliance has two teams. This means that your team will be cooperating with another team. The objective is to collect as many points possible within the time restriction.</p>
      <p>Students learn to build sturdy robots using metal VEX parts. Additionally, members will program a robot using RobotC, a special programming similar to C and design their VEX Robot using Autodesk Inventor, a 3D modeling program..</p>
      <p>Meetings are held every Wednesdays. Members may be expected to work during weekends, especially in preparation for the competition.</p>
    </c-block>
    <p>Learn more about the VEX competition by visiting the team's wiki page</p>
    <a href="https://github.com/eshsrobotics/database/wiki/VRC" target="_blank">
      <c-button>Learn More</c-button>
    </a>
    <br/><br/>

    <h2>VEX Photo Album</h2>
    <infinite-slide-bar duration="70s" width="3600px">
      <div class="carousel">
        <card-generic :cardInfo="previewPhotos[0]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[1]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[2]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[3]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[4]" class="competition"></card-generic>
      </div>
    </infinite-slide-bar>
    <router-link to="/album/2017-2018-vex-generic-photos">
      <c-button>See More</c-button>
    </router-link>
  </div>
</template>

<script>
import CBlock from '@/components/ui/Block'
import CButton from '@/components/ui/CButton'
import CardGeneric from '@/components/card/CardGeneric'

export default {
  name: 'vex',
  data() {
    return {
      vexBlock: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vex-competition-prep/vex8.small.jpg?raw=true',
        imageAltText: 'Arial view of the VEX field for the 2017-2018 competition',
        photoPosition: 'right'
      },
      previewPhotos: [
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vrc-generic-photos/vex7.small.jpg?raw=true',
          imageAltText: "Person handling wires of small three wheeler VEX robot",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vrc-generic-photos/vex14.small.jpg?raw=true',
          imageAltText: "Containers storing a majority of the VEX parts",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/vex-competition-prep/vexprep1.small.jpg?raw=true',
          imageAltText: "Two members discussion and prototyping a robot design",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vrc-generic-photos/vex5.small.jpg?raw=true',
          imageAltText: "Person changing the tightness of a screw using a screwdriver",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vex-competition-prep/vex8.small.jpg?raw=true',
          imageAltText: "Arial view of the VEX field for the 2017-2018 competition",
        },
      ],
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
