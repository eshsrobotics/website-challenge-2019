<template>
  <div class="coaches-and-mentors">
    <h2>Coaches</h2>
    <p>We are grateful to our coaches for working hard to administer and drive the robotics club towards a positive direction.</p>
    <layout-cards-overflow class="overflow">
      <card-generic v-for="coach in coaches" :cardInfo="coach" :key="coach.title" class="generic"></card-generic>
    </layout-cards-overflow>

    <h2>Mentors</h2>
    <p>We thank our mentors for dedicating their time to use their knowledge to guide the club towards a better future. Learn more about becoming a mentor by visiting the <a class="a" href="https://github.com/eshsrobotics/database/wiki/Mentors">wiki page</a>!</p>

    <layout-cards-overflow class="overflow">
      <card-generic v-for="mentor in mentors" :cardInfo="mentor" :key="mentor.title" class="generic"></card-generic>
    </layout-cards-overflow>
    <h2>Officers</h2>
    <p>We value all officers for their hard work in bringing this club together.</p>
    <layout-cards-overflow class="overflow">
      <card-generic v-for="officer in officers" :cardInfo="officer" :key="officer.title" class="generic"></card-generic>
    </layout-cards-overflow>
  </div>
</template>

<script>
import LayoutCardsOverflow from '@/components/card-layout/LayoutCardsOverflow'
import CardGeneric from '@/components/card/CardGeneric'

export default {
  name: 'coachesAndMentors',
  data() {
    let tempDesc = 'Description of person. Short and concise. Well-written.'
    return {
      coaches: [
        {
          title: 'Alan Davis',
          subtitle: 'VEX Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'An instructor for the first few years of the Engineering pathway; helps direct the VEX team to the right direction.'
        },
        {
          title: 'Danial Horvath',
          subtitle: 'FRC Coach',
          desc: 'Teaches various S.T.E.M. subjects such as AP Physics 1 in addition to coaching the FRC team.'
        },
        {
          title: 'Joelle Robinson',
          subtitle: 'Cyberpatriots Coach',
          desc: 'Helps coach for CyberPatriots and also teaches AP Computer Science A, among other classes.'
        }
      ],
      mentors: [
        {
          title: 'Santiago Garza',
          subtitle: 'FRC',
          desc: 'FRC alumnus & former Dean’s list award winner, Santiago brings years of experience both on and off the robotics field to the POTATOES'
        },
        {
          title: 'Uche Akotaobi',
          subtitle: 'VEX & FRC',
        },
        {
          title: 'Cheryl Bhence',
          subtitle: 'FRC',
        },
        {
          title: 'Brandon Marshall',
          subtitle: 'VEX',
        },
        {
          title: 'Michael Leahy',
          subtitle: 'FRC',
        },
        {
          title: 'Jim Swenson',
          subtitle: 'FRC & VEX',
        },
        {
          title: 'Bob Solanto',
          subtitle: 'FRC & VEX',
        }
      ],
      officers: [
        {
          title: 'Spensor Moore',
          subtitle: 'FRC Co-Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Also lead programmer, Spensor helps oversee the development of the FRC competition and preparation for the competition.'
        },
        {
          title: 'Grace Ringuette',
          subtitle: 'FRC Co-Captain',
          desc: 'With experience of VEX Robotics, Grace brings talent and direction to the fabrication of FRC robots.'
        },
        {
          title: 'Daniel Stamper',
          subtitle: 'VEX Co-Captain',
          desc: 'Daniel Stamper, in conjunction with Co-Captain James Lim help recruit members and direct lessons related to VEX.'
        },
        {
          title: 'James Lim',
          subtitle: 'VEX Co-Captain',
          desc: 'James Lim, in conjunction with Co-Captain Daniel Stamper help recruit members and direct lessons related to VEX.'
        },
        {
          title: 'Jasper Nelson',
          subtitle: 'CyberPatriots Captain',
          desc: 'Jasper Nelson keeps the CyberPatriots program on track and oversees technical training for CyberPatriots competitions.'
        },
        {
          title: 'Lizzie Kapoor',
          subtitle: 'Marketing Captain',
          desc: 'Overlooks brand and brand presentation. Coordinates fundraising and recruitment events.'
        }
      ]
    }
  },
  components: {
    'layout-cards-overflow': LayoutCardsOverflow,
    'card-generic': CardGeneric
  }
}
</script>

<style scoped lang="scss">
.generic {
  width: 250px;
  margin-bottom: 20px;
}

p {
  padding-bottom: 10px;
}

@media(max-width: 640px) {
  .overflow {
    display: flex;
    flex-direction: column;
    max-width: 100%;

    & * {
      width: 100%;
      display: block;
      box-sizing: border-box;
    }
  }
}
</style>
