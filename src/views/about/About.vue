<template>
  <div class="about">
    <c-block :blockData="coreValuesBlock">
      <h2>Core Values</h2>
      <p>El Segundo High School Robotics club emphasizes integrity, academic excellence. Club members must consistently demonstrate that they uphold the highest moral principles. Additionally, the club believes that academic excellence comes first. Meaning, club membership and activity does not trump academics activities such as homework or classwork.
        <a href="https://www.youtube.com/watch?v=h2e6gxczMxc" target="_blank">Gracious professionalism</a> are also important qualities members pursue.</p>
      <p>All club members work hard to demonstrate these core values when interacting with others or themselves. We self-reflect upon our own actions to improve ourselves as people.</p>
    </c-block>
    <h2>History</h2>
    <c-block :blockData="historyEarly">
      <p>The club started back in 2005, according to the club's old <a href="https://github.com/ESHSPOTATOES" target="_blank">GitHub</a> profile. The earliest photograph to date was uploaded on August 10th, 2013, although the photograph could have been taken much earlier. Not much is known about the earliest stages of the club. Little evidence was left behind. We do know, however, that the team was awarded an FRC rookie award during its first few years.</p>
      <p>As the club developed, the program became less of a niche group. Members joined to improve the marketing, branding, and outreach programs. This period of time ended when club membership peaked during the 2015-2016 school year. </p>
    </c-block>

    <c-block :blockData="teamStructure">
      <h2>Team Structure</h2>
      <p>The team is structured into three programs: CyberPatriots, FRC, and VEX. An officer helps coordinate the activities of each program. Additionally, a marketing lead heps coordinate any marketing and media activities. Additionally, other officers are a part of management, such as the treasurer, secretary and the webmaster. All officers and mentors work together to make the club a better place. Learn more about the team structure by visiting the team's wiki page.</p>
      <a class="no-tag" target="_blank" href="https://github.com/eshsrobotics/database/wiki/Team-Structure"><c-button>Learn More</c-button></a>
    </c-block>
    <c-block :blockData="teamRecruitment">
      <h2>Recruitment Efforts</h2>
      <p>The club orchestrates recruitment efforts to improve the visibility of the club and increase member count.</p>
      <p>For example, marketing helps coordinate the club's involvement in S.T.E.A.M. night, an evening hosted at the town's Elementary School that promotes topics relates to science, technology, engineering, art, and math. They arranged to showcase the FRC robot to the Elementary School kids. The robot demonstrated its abilities and drove around.</p>
      <p>Additionally, the marketing team helps fabricate posters to improve reach and increase member count. The photograph in the left figure shows one marketing poster used to garner interest in the club. It initially deployed during the 2017-2018 school year.</p>
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
        image: 'https://github.com/eshsrobotics/website-challenge-2019/blob/master/src/assets/local-image/high-school.jpg?raw=true',
        imageAltText: 'Front of El Segundo High School, located in El Segundo, California',
        photoPosition: 'left'
      },
      historyEarly: {
        image: 'https://github.com/eshsrobotics/website-challenge-2019/blob/master/src/assets/local-image/early-robotics-2013-08.jpg?raw=true',
        imageAltText: 'The team\'s robot during the year of 2013',
        photoPosition: 'right'
      },
      teamStructure: {
        image: 'https://github.com/eshsrobotics/database/blob/master/marketing%20and%20media/team%20structure/Team%20Structure%20Diagram%20Version%202.png?raw=true',
        imageAltText: 'A diagram of the team\'s structure',
        photoPosition: 'right'
      },
      teamRecruitment: {
        image: 'https://github.com/eshsrobotics/database/blob/master/marketing%20and%20media/recruitment%20posters/vrc%20poster/Final%20Simple%20Robotics%20Poster.png?raw=true',
        imageAltText: 'Robotics poster that advocates to join the robotics club.',
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

.no-tag {
  text-decoration: none;
}
</style>
