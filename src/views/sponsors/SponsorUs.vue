<template>
<div class="sponsor-us">
  <c-block :blockData="coreValuesBlock">
    <h2>Core Values</h2>
    <p>El Segundo High School Robotics club emphasizes integrity, academic excellence. Club members must consistently demonstrate that they uphold the highest moral principles. Additionally, the club believes that academic excellence comes first. Meaning, club membership and activity does not trump academics activities such as homework or classwork.
      <a href="https://www.youtube.com/watch?v=h2e6gxczMxc" target="_blank">Gracious professionalism</a> are also important qualities members pursue.</p>
    <p>All club members work hard to demonstrate these core values when interacting with others or themselves. We reflect upon our own actions and self-reflect to improve ourselves.</p>

    <h2>Why Sponsor</h2>
    <p>Sponsoring helps the club purchase items for different programs of the Robotics. Most of the money goes towards purchasing robot parts, but some also contribute to food costs. For example, FRC purchases the official FRC motors and chassis pieces to construct the frame and the drive train of the robot. Additionally, VEX may purchase replacement parts or CyberPatriots may order computers.</p>
    <p>The P.O.T.A.T.O.E.S. is grateful for all our sponsor's contributions. If you want to help the club grow and flourish, consider donating! Donations do not just include monetary values, but other resources such as equipment and tools.</p>

    <h2>Sponsoring Tiers</h2>
    <p>All sponsors are given public acknowledgement on the team's official website and t-shirt.</p>
    <h4>Gold</h4>
    <ul class="chevron">
      <li><p>$5000+ in currency, goods, or services</p></li>
      <li><p>Large logo on all promotional material</p></li>
      <li><p>All silver and bronze benefits</p></li>
    </ul>
    <h4>Silver</h4>
    <ul class="chevron">
      <li><p>Up to $5000+ in currency, goods, or services</p></li>
      <li><p>Medium logo on all promotional material</p></li>
      <li><p>All bronze benefits</p></li>
    </ul>
    <h4>Bronze</h4>
    <ul class="chevron">
      <li><p>Up to $1000+ in currency, goods, or services</p></li>
      <li><p>Small logo on website and robot</p></li>
    </ul>
  </c-block>

  <page-desc>
    <h2>How to Sponsor</h2>
    <p>If you wish to sponsor us, please <router-link to="/contact">contact us</router-link> concerning any inquiries.</p>
    <br/>

    <h3>See Our Sponsors</h3>
    <router-link to="/sponsors"><c-button>Our Sponsors</c-button></router-link>
  </page-desc>

</div>
</template>

<script>
import CButton from '@/components/ui/CButton'
import PageDesc from '@/components/PageDescription'
import CBlock from '@/components/ui/Block'

export default {
  name: 'sponsorUs',
  data() {
    return {
      coreValuesBlock: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2016-2017/frc-competition/frccompetition48.small.jpg?raw=true',
        imageAltText: 'Front of El Segundo High School, located in El Segundo, California',
        photoPosition: 'right'
      }
    }
  },
  components: {
    'c-button': CButton,
    'page-desc': PageDesc,
    'c-block': CBlock
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
ul {
  padding-left: 50px;
}
</style>
