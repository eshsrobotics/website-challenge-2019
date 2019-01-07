<template>
  <div class="about">
    <c-block :blockData="coreValuesBlock">
      <h2>Core Values</h2>
      <p>El Segundo High School Robotics club emphasizes integrity, academic excellence. Club members must consistently demonstrate that they uphold the highest moral principles. Additionally, the club believes that academic excellence comes first. Meaning, club membership and activity does not trump academics activities such as homework or classwork.
        <a href="https://www.youtube.com/watch?v=h2e6gxczMxc" target="_blank">Gracious professionalism</a> are also important qualities members pursue.</p>
      <p>All club members work hard to demonstrate these core values when interacting with others or themselves. We reflect upon our own actions and self-reflect to improve ourselves.</p>
    </c-block>
    <h2>History</h2>
    <c-block :blockData="historyEarly">
      <p>The club started back in 2005, according to the club's old <a href="https://github.com/ESHSPOTATOES" target="_blank">GitHub</a> profile. The earliest photograph to date was uploaded on August 10th, 2013, although the photograph could have been taken much earlier. Not much is known about the earliest stages of the club. Little evidence was left behind.</p>
      <p>We do know, however, that the team was awarded an FRC rookie award during its rookie years.</p>
      <p>As the club developed, the program became less of a niche group. Members joined to improve the marketing, branding, and outreach programs. This period of time ended when club membership peaked during the 2015-2016 [VERIFY] school year. </p>
      <p></p>
      <p>Currently, there are three flourishing programs: VRC (VEX Robotics Competition), FRC (FIRST Robotics Competition) and CyberPatriots. Membership has grown especially in <router-link to="/vex">VEX Robotics</router-link> and <router-link to="/vex">CyberPatriots</router-link>. Recruitment efforts currently executing include raising participating in FRC.</p>
    </c-block>

    <c-block :blockData="teamStructure">
      <h2>Team Structure</h2>
      <p>Est aliqua dolor aliqua aliqua ea deserunt. Sunt laborum dolor consectetur magna cillum non deserunt id in cupidatat dolor cillum aliquip. Voluptate consequat in magna proident aute et cillum occaecat nisi esse cillum. Amet aute dolor deserunt culpa sunt nulla et est laborum officia consequat proident culpa.</p>
    </c-block>
    <c-block :blockData="teamRecruitment">
      <h2>Recruitment Efforts</h2>
      <p>Est aliqua dolor aliqua aliqua ea deserunt. Sunt laborum dolor consectetur magna cillum non deserunt id in cupidatat dolor cillum aliquip. Voluptate consequat in magna proident aute et cillum occaecat nisi esse cillum. Amet aute dolor deserunt culpa sunt nulla et est laborum officia consequat proident culpa.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur, id laudantium nam quidem sed voluptatum. At commodi debitis dolorem ducimus minus omnis qui temporibus. Amet enim iusto minima nostrum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore illo iure nemo perferendis praesentium quibusdam vero! Accusantium dolores esse quis quos repudiandae. Cupiditate, distinctio, hic. Debitis dolor eaque vel!</p>
    </c-block>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CBreadcrumb from '@/components/ui/Breadcrumb'
import CBlock from '@/components/ui/Block'
import CButton from '@/components/ui/CButton'

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
      teamStructure: {
        image: 'https://github.com/eshsrobotics/database/blob/master/marketing%20and%20media/team%20structure/Team%20Structure%20Diagram%20Version%202.png?raw=true',
        imageAltText: 'A diagram of the team\'s structure',
        photoPosition: 'right'
      },
      teamRecruitment: {
        image: 'https://github.com/eshsrobotics/database/blob/master/marketing%20and%20media/recruitment%20posters/vrc%20poster/Final%20Simple%20Robotics%20Poster.png?raw=true',
        imageAltText: 'Photograph of a poster advocating to join the robotics club.',
        photoPosition: 'left'
      }
    }
  },
  components: {
    'page-desc': PageDesc,
    'c-breadcrumb': CBreadcrumb,
    'c-block': CBlock,
    'c-button': CButton
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>