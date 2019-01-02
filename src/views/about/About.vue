<template>
  <div class="about">
    <c-block :blockData="coreValuesBlock">
      <h2>Core Values</h2>
      <p>El Segundo High School Robotics club emphasizes integrity, academic excellence. Club members must consistently demonstrate that they uphold the highest moral principles. Additionally, the club believes that academic excellence comes first. Meaning, club membership and activity does not trump academics activities such as homework or classwork. Gracious Professionalism are also important qualities members pursue.</p>
      <p>All club members work hard to demonstrate these core values when interacting with others or themselves. We reflect upon our own actions and self-reflect to improve ourselves.</p>
    </c-block>
    <h2>History</h2>
    <c-block :blockData="historyEarly">
      <h3>Early Beginnings</h3>
      <p>The club started back in 2005, according to the club's old <a href="https://github.com/ESHSPOTATOES" target="_blank">GitHub</a> profile. The earliest photograph to date was uploaded on August 10th, 2013, although the photograph could have been taken much earlier. Not much is known about the earliest stages of the club. Little evidence was left behind. We know the team was awarded <b>FRC ROOKIE AWARD INSERT SPECIFICS</b> in <b>INSERT DATE</b>.</p>
    </c-block>
    <c-block :blockData="historyDevelopment">
      <h3>Club Development</h3>
      <p>As the club developed, the program became less of a niche group. Members joined to improve the marketing, branding, and outreach programs. This period of time ended when club membership peaked during the 2015-2016 [VERIFY] school year. </p>
    </c-block>
    <c-block :blockData="historyRecent">
      <h3>Recent Years</h3>
      <p></p>
      <p>Currently, there are three flourishing programs: VRC (VEX Robotics Competition), FRC (FIRST Robotics Competition) and CyberPatriots. Membership has grown especially in <router-link to="/vex">VEX Robotics</router-link> and <router-link to="/vex">CyberPatriots</router-link>. Recruitment efforts currently executing include raising participating in FRC.</p>
    </c-block>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CBreadcrumb from '@/components/ui/Breadcrumb'
import CBlock from '@/components/ui/Block'

export default {
  name: 'about',
  data() {
    return {
      coreValuesBlock: {
        image: 'http://move2manhattanbeach.virtualresults.net/wp-files/1040/2014/07/ES-high-school.jpg',
        imageAltText: 'Dummy Image',
        photoPosition: 'left'
      },
      historyEarly: {
        image: 'https://eshsroboticsclub.files.wordpress.com/2013/08/photo.jpg?w=585',
        imageAltText: 'Dummy Image',
        photoPosition: 'right'
      },
      historyDevelopment: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition/frccompetition8.jpg?raw=true',
        imageAltText: 'Dummy Image',
        photoPosition: 'right'
      },
      historyRecent: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/cyberpatriots-november-competition/IMG_0902.jpg?raw=true',
        imageAltText: 'Dummy Image',
        photoPosition: 'right'
      }
    }
  },
  components: {
    'page-desc': PageDesc,
    'c-breadcrumb': CBreadcrumb,
    'c-block': CBlock
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>