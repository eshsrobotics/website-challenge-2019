<template>
  <div class="vex">
    <c-block :blockData="vexBlock">
      <h2>About</h2>
      <p>Teams of students work together to design, program, and build a robot that competes with other teams. Each robot is designed to complete a certain objective or goal, which changes annually. During competition, a red and blue alliance battle it out. Each alliance has two teams. This means that your team will be cooperating with another team. The objective is to collect as many points possible within the time restriction.</p>
      <p>Students learn to build robots using VEX parts, program a robot using RobotC, and design their VEX Robot using Autodesk Inventor.</p>
    </c-block>

    <h2>VEX Photos</h2>
    <infinite-slide-bar duration="70s" width="3600px">
      <div class="carousel">
        <card-generic :cardInfo="previewPhotos[0]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[1]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[2]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[3]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[4]" class="competition"></card-generic>
      </div>
    </infinite-slide-bar>
    <router-link to="/resources/album/2017-2018-vex-generic-photos">
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
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vex-competition-prep/vex8.jpg?raw=true',
        imageAltText: 'Dummy Image',
        photoPosition: 'right'
      },
      previewPhotos: [
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vrc-generic-photos/vex7.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vrc-generic-photos/vex14.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/vex-competition-prep/vexprep1.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vrc-generic-photos/vex5.jpg?raw=true',
          imageAltText: "Alt text",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/vex-competition-prep/vex8.jpg?raw=true',
          imageAltText: "Alt text",
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