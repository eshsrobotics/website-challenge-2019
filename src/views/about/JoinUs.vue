<template>
  <div class="join-us">
    <c-block :blockData="joinUsBlock">
      <h1>Students</h1>
      <h2>Why join the El Segundo High School robotics club?</h2>
      <p>Through the ESHS Robotics club your student will have many opportunities to learn and develop various real world skills in STEM(Science Technology Engineeering & Math) & non-stem career pathways. These opportunities range from learning how to network a computer system, designing a large 150 pound robot, or making miniature bots the size of a shoebox.</p>
      <h2>Not just STEM</h2>
      <p>Although the primary focus of the Robotics club is to inspire students to join the field of science and technology, members also have the opportunity to branch into non-stem departments. Students who are interested about learning the business side of STEM can join the Public Relations & Marketing department where they will learn and apply business skills anywhere from building and maintaining a brand to pitching local businesses for sponsorships.</p>
      <h2>Opportunities</h2>
      <ul class="chevron">
        <li>Exposure to STEM & Non-STEM related careers</li>
        <li>Direct mentorship from professionals working in both STEM & Non-STEM fields</li>
        <li>A variety scholarships for schools all over the U.S.</li>
        <li>Internships with local sponsoring businesses</li>
      </ul>
      <!--<h1>Mentors</h1>-->
      <!--<p>Learn more by visiting the Mentors wiki Page!</p>-->
      <!--<a class="a" href="https://github.com/eshsrobotics/database/wiki/Mentors"><c-button>Visit</c-button></a>-->
    </c-block>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CButton from '@/components/ui/CButton'
import CBlock from '@/components/ui/Block'

export default {
  name: "JoinUs",
  data() {
    return {
      joinUsBlock: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition/frccompetition34.jpg?raw=true',
        imageAltText: 'Team pow-ow during the FRC competition',
        photoPosition: 'right'
      },
    }
  },
  components: {
    'page-desc': PageDesc,
    'c-button': CButton,
    'c-block': CBlock
  }
}
</script>

<style scoped lang="scss">
ul {
  padding-left: 50px;
}

.a {
  text-decoration: none;
}
</style>