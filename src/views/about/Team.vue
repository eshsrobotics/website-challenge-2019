<template>
  <div class="coaches-and-mentors">
    <h2>Coaches</h2>
    <p>We are grateful to our coaches for working hard to administer and drive the robotics club towards a positive direction.</p>
    <layout-cards-overflow class="overflow">
      <card-generic v-for="coach in coaches" :cardInfo="coach" class="generic"></card-generic>
    </layout-cards-overflow>

    <h2>Mentors</h2>
    <p>We thank our mentors for dedicating their time to use their knowledge to guide the club towards a better future.</p>
    <layout-cards-overflow class="overflow">
      <card-generic v-for="mentor in mentors" :cardInfo="mentor" class="generic"></card-generic>
    </layout-cards-overflow>

    <h2>Officers</h2>
    <layout-cards-overflow class="overflow">
      <card-generic v-for="officer in officers" :cardInfo="officer" class="generic"></card-generic>
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
          desc: 'Mr. Davis teaches the first few years of the Engineering pathway and helps direct the VEX team to the right direction.'
        },
        {
          title: 'Danial Horvath',
          subtitle: 'FRC Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Mr. Horvath teaches various S.T.E.M. subjects such as AP Physics 1 in addition to directing the FRC team.'
        },
        {
          title: 'Joelle Robinson',
          subtitle: 'Cyberpatriots Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Ms. Robinson helps coach for CyberPatriots and also teaches AP Computer Science A and other math classes.'
        }
      ],
      mentors: [
        {
          title: 'Santiago Garza',
          subtitle: 'Company Alpha',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.'
        },
        {
          title: 'Cheryl Bhence',
          subtitle: 'FRC',
          desc: 'Do esse laborum consequat officia eu aliqua commodo reprehenderit.'
        },
        {
          title: 'Brandon Marshall',
          subtitle: 'VEX',
          // desc: 'Description'
        },
        {
          title: 'Michael Leahy',
          subtitle: 'FRC',
          // desc: 'Description'
        },
        {
          title: 'Jim Swenson',
          subtitle: 'FRC & VEX',
          desc: 'In veniam elit aliquip minim deserunt deserunt elit occaecat et.'
        },
        {
          title: 'Bob Solanto',
          subtitle: 'FRC & VEX',
          desc: 'In veniam elit aliquip minim deserunt deserunt elit occaecat et.'
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
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'With experience of VEX Robotics, Grace brings talent and direction to the fabrication of FRC robots.'
        },
        {
          title: 'Daniel Stamper',
          subtitle: 'VEX Co-Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Daniel Stamper, in conjunction with Co-Captain James Lim help recruit members and direct lessons related to VEX.'
        },
        {
          title: 'James Lim',
          subtitle: 'VEX Co-Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'James Lim, in conjunction with Co-Captain Daniel Stamper help recruit members and direct lessons related to VEX.'
        },
        {
          title: 'Jasper Nelson',
          subtitle: 'CyberPatriots Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Jasper Nelson keeps the CyberPatriots program on track and oversees technical training for CyberPatriots competitions.'
        },
        {
          title: 'Lizzie Kapoor',
          subtitle: 'Marketing Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Helps improve the reach of the Robotics Club by updating social media and coordinating fundraising events.'
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

@media(max-width: 400px) {
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