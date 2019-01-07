<template>
  <div class="coaches-and-mentors">
    <h2>Coaches</h2>
    <p>We are grateful to our coaches for working hard to administer and drive the robotics club towards a positive direction.</p>
    <layout-cards-overflow>
      <card-generic :cardInfo="coaches.davis" class="generic"></card-generic>
      <card-generic :cardInfo="coaches.horvath" class="generic"></card-generic>
      <card-generic :cardInfo="coaches.robinson" class="generic"></card-generic>
    </layout-cards-overflow>

    <h2>Mentors</h2>
    <p>We thank our mentos for dedicating their time to use their knowledge to guide the club towards a better future.</p>
    <layout-cards-overflow>
      <card-generic :cardInfo="mentors.person1" class="generic"></card-generic>
      <card-generic :cardInfo="mentors.person2" class="generic"></card-generic>
      <card-generic :cardInfo="mentors.person3" class="generic"></card-generic>
      <card-generic :cardInfo="mentors.person4" class="generic"></card-generic>
      <card-generic :cardInfo="mentors.person5" class="generic"></card-generic>
    </layout-cards-overflow>

    <h2>Officers</h2>
    <layout-cards-overflow>
      <card-generic :cardInfo="officers.spensor" class="generic"></card-generic>
      <card-generic :cardInfo="officers.grace" class="generic"></card-generic>
      <card-generic :cardInfo="officers.daniel" class="generic"></card-generic>
      <card-generic :cardInfo="officers.james" class="generic"></card-generic>
      <card-generic :cardInfo="officers.jasper" class="generic"></card-generic>
      <card-generic :cardInfo="officers.lizzie" class="generic"></card-generic>
    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/card-layout/LayoutCardsOverflow'
import CardGeneric from '@/components/card/CardGeneric'


export default {
  name: 'coachesAndMentors',
  data() {
    let tempDesc = 'Description of person. Short and concise. Well-written.'
    return {
      coaches: {
        davis: {
          title: 'Alan Davis',
          subtitle: 'VEX Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.'
        },
        horvath: {
          title: 'Danial Horvath',
          subtitle: 'FRC Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Lorem exercitation tempor quis est.'
        },
        robinson: {
          title: 'Joelle Robinson',
          subtitle: 'Cyberpatriots Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Nulla voluptate et magna reprehenderit commodo ea consectetur.'
        }
      },
      mentors: {
        person1: {
          title: 'Santiago Garza',
          subtitle: 'Company Alpha',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          // imageAltText: 'This is an important person',
          desc: 'Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.'
        },
        person2: {
          title: 'Cheryl Bhence',
          subtitle: 'Company Beta',
          desc: 'Do esse laborum consequat officia eu aliqua commodo reprehenderit.'
        },
        person3: {
          title: 'Brandon Marshall',
          subtitle: 'Company Gamma',
          desc: 'Laboris reprehenderit consequat occaecat enim.'
        },
        person4: {
          title: 'Michael Leahy',
          subtitle: 'FRC',
          desc: 'In veniam elit aliquip minim deserunt deserunt elit occaecat et.'
        },
        person5: {
          title: 'Jim Swenson',
          subtitle: 'FRC & VEX',
          desc: 'In veniam elit aliquip minim deserunt deserunt elit occaecat et.'
        }
      },
      officers: {
        spensor: {
          title: 'Spensor Moore',
          subtitle: 'FRC Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        daniel: {
          title: 'Daniel Stamper',
          subtitle: 'VEX Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        james: {
          title: 'James Lim',
          subtitle: 'VEX Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        jasper: {
          title: 'Jasper Nelson',
          subtitle: 'CyberPatriots Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        grace: {
          title: 'Grace Ringuette',
          subtitle: 'FRC Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        lizzie: {
          title: 'Lizzie kapoor',
          subtitle: 'Marketing Captain',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        }
      }
    }
  },
  components: {
    'c-breadcrumb': CBreadcrumb,
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