<template>
  <div class="cyberpatriots">
    <c-block :blockData="cypatBlock">
      <h2>About</h2>
      <p>Teams of around four members compete to improve the security of a computer. In other words, teams protect the computer from potential hackers or malicious programs. This includes securing local intranet networks, investigating suspicious software, or auditing security policies. During competition and training, groups run virtual images that represent operating systems. For example, participants must secure Windows 10, Windows 7, Windows 2018 Server, Ubuntu 18, and other operating systems.</p>
      <p>Points are accumulated by fixing vulnerabilities or critical series. If a member happens to increase the vulnerability of the operating system, the team loses points. However, sometimes points can be regained back during competition.</p>
      <p>You'll learn how to improve the security of various operating systems such as Windows 7, Windows 10, and variants of Linux, such as Ubuntu or Fedora. Some fixes are simple, such as enabling firewalls or managing users. Others are slightly more complex, such as configuring ports for applications to use, or auditing security policies.</p>
      <p>Meetings are held on Fridays.</p>
      <p>The Cyberpatriots competition is sponsored by the U.S. Air Force Association.</p>
    </c-block>

    <h2>Cyberpatriots Photo Album</h2>
    <infinite-slide-bar duration="70s" width="3600px">
      <div class="carousel">
        <card-generic :cardInfo="previewPhotos[0]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[1]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[2]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[3]" class="competition"></card-generic>
        <card-generic :cardInfo="previewPhotos[4]" class="competition"></card-generic>
      </div>
    </infinite-slide-bar>
    <router-link to="/album/2018-2019-cyberpatriots-competition-round-1">
      <c-button>See More</c-button>
    </router-link>
  </div>
</template>

<script>
import CBlock from '@/components/ui/Block'
import CButton from '@/components/ui/CButton'
import CardGeneric from '@/components/card/CardGeneric'

export default {
  name: 'cyberpatriots',
  data() {
    return {
      startVal: 0,
      endVal: 100,
      decimals: 0,
      duration: 2.5,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
      cypatBlock: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/cyberpatriots-competition-prep/cyberPatriots2.small.jpg?raw=true',
        imageAltText: 'Person brainstorming before competition',
        photoPosition: 'right'
      },
      previewPhotos: [
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/cyberpatriots-november-competition/IMG_0900.small.jpg?raw=true',
          imageAltText: "Team of members working to complete an image",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/cyberpatriots-competition-prep/cyberPatriots9.small.jpg?raw=true',
          imageAltText: "Person using the terminal using a personal computer",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/cyberpatriots-november-competition/IMG_0906.small.jpg?raw=true',
          imageAltText: "Two members communicating during the competition",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/cyberpatriots-november-competition/IMG_0904.small.jpg?raw=true',
          imageAltText: "Two members communicating during the competition",
        },
        {
          image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/cyberpatriots-competition-prep/cyberPatriots1.small.jpg?raw=true',
          imageAltText: "A person standing in front of a whiteboard, thinking intensely",
        },
      ],
      quickLinks: [
        {
          "name": "Official Website",
          "url": "https://www.uscyberpatriot.org/",
          "desc": "Official CyberPatriots Website"
        }
      ]
    }
  },
  methods: {
    // onReady: function(instance, CountUp) {
    //   const that = this;
    //   instance.update(that.endVal + 100);
    // }
  },
  components: {
    'c-block': CBlock,
    'c-button': CButton,
    'card-generic': CardGeneric
  }
}
</script>

<style scoped lang="scss">
  .iCountUp {
    font-size: 12em;
    margin: 0;
    color: #4d63bc;
  }

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
