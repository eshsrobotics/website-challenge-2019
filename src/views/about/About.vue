<template>
  <div class="about">
    <c-block :blockData="coreValuesBlock">
      <h2>Core Values</h2>
      <p>El Segundo High School Robotics club emphasizes three values. Integrity and Iota. Both Integrity and Iota are important because of Foo Gamma Kappa etc.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aperiam autem consequuntur, ducimus expedita laudantium numquam omnis, pariatur possimus quos reiciendis tempora, veniam? Error eveniet facere impedit laborum maiores.</p>
    </c-block>
    <h2>History</h2>
    <c-block :blockData="historyEarly">
      <h3>Early Beginnings</h3>
      <p>The club started back in 2005, according to the club's old <a href="https://github.com/ESHSPOTATOES">GitHub</a> profile. The earliest photograph to date was uploaded on August 10th, 2013, although the photograph could have been taken much earlier. Not much is known about the earliest stages of the club. Little evidence was left behind. We know the team was awarded <b>FRC ROOKIE AWARD INSERT SPECIFICS</b> in <b>INSERT DATE</b>.</p>
      <p>Deserunt esse et ullamco adipisicing nisi incididunt commodo. Laborum ex sunt et duis. Aliqua est nulla ut ad veniam ex commodo sit ad commodo occaecat. Cupidatat proident cillum proident sint minim id sit. Qui veniam adipisicing cupidatat qui dolor sunt.</p>
    </c-block>
    <c-block :blockData="historyDevelopment">
      <h3>Club Development</h3>
      <p>Occaecat occaecat duis excepteur eiusmod eu aute aliquip reprehenderit sunt elit dolore do reprehenderit. Dolor qui Lorem anim veniam voluptate. Aute consectetur reprehenderit nulla consequat. Proident deserunt aliquip dolore exercitation nulla incididunt sunt ullamco consectetur veniam anim adipisicing. Tempor commodo eu aute ex minim occaecat ex laborum.</p>
    </c-block>
    <c-block :blockData="historyRecent">
      <h3>Recent Years</h3>
      <p>Over the past few years, the club has grown steadily in members, increasing membership, especially in <router-link to="/vex">VEX Robotics</router-link> and <router-link to="/vex">CyberPatriots</router-link>. After the steep dropoff in club membership between the 2015-2016 to the 2016-2017 school year, the club has been steadily gaining membership..</p>
      <p>Mollit consequat cillum ipsum ipsum nostrud officia ipsum qui aliquip cupidatat irure. Minim cillum sint est officia enim id ea laboris elit est exercitation sit. Aliqua mollit aliqua voluptate elit ullamco aliquip. Fugiat culpa dolor Lorem ipsum. Et ex esse excepteur anim ea duis exercitation occaecat cupidatat eiusmod. Ea mollit dolor Lorem eiusmod nostrud dolore proident cillum amet anim. Mollit aliquip officia non nulla anim incididunt.</p>
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