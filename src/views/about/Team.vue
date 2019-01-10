<template>
  <div class="coaches-and-mentors">
    <h2>Coaches</h2>
    <p>We are grateful to our coaches for working hard to administer and drive the robotics club towards a positive direction.</p>
    <layout-cards-overflow>
      <card-generic v-for="coach in coaches" :cardInfo="coach" class="generic"></card-generic>
    </layout-cards-overflow>

    <h2>Mentors</h2>
    <p>We thank our mentors for dedicating their time to use their knowledge to guide the club towards a better future.</p>
    <layout-cards-overflow>
      <card-generic v-for="mentor in mentors" :cardInfo="mentor" class="generic"></card-generic>
    </layout-cards-overflow>

    <h2>Officers</h2>
    <layout-cards-overflow>
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
          desc: 'Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.'
        },
        {
          title: 'Danial Horvath',
          subtitle: 'FRC Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Lorem exercitation tempor quis est.'
        },
        {
          title: 'Joelle Robinson',
          subtitle: 'Cyberpatriots Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Nulla voluptate et magna reprehenderit commodo ea consectetur.'
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
          subtitle: 'Company Beta',
          desc: 'Do esse laborum consequat officia eu aliqua commodo reprehenderit.'
        },
        {
          title: 'Brandon Marshall',
          subtitle: 'Company Gamma',
          desc: 'Laboris reprehenderit consequat occaecat enim.'
        },
        {
          title: 'Michael Leahy',
          subtitle: 'FRC',
          desc: 'In veniam elit aliquip minim deserunt deserunt elit occaecat et.'
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
        },
        {
          title: 'Brandon Marshall',
          subtitle: 'VEX',
          desc: 'In veniam elit aliquip minim deserunt deserunt elit occaecat et.'
        },
      ],
      officers: [
        {
          title: 'Spensor Moore',
          subtitle: 'FRC Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: tempDesc
        },
        {
          title: 'Daniel Stamper',
          subtitle: 'VEX Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: tempDesc
        },
        {
          title: 'James Lim',
          subtitle: 'VEX Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: tempDesc
        },
        {
          title: 'Jasper Nelson',
          subtitle: 'CyberPatriots Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: tempDesc
        },
        {
          title: 'Grace Ringuette',
          subtitle: 'FRC Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: tempDesc
        },
        {
          title: 'Lizzie Kapoor',
          subtitle: 'Marketing Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: tempDesc
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
</style>