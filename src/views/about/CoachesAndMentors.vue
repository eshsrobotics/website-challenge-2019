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
    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import CardGeneric from '@/components/cards/CardGeneric'


export default {
  name: 'coachesAndMentors',
  data() {
    return {
      coaches: {
        davis: {
          title: 'Alan Davis',
          subtitle: 'VEX Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.'
        },
        horvath: {
          title: 'Danial Horvath',
          subtitle: 'FRC Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Lorem exercitation tempor quis est.'
        },
        robinson: {
          title: 'Joelle Robinson',
          subtitle: 'Cyberpatriots Coach',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Nulla voluptate et magna reprehenderit commodo ea consectetur.'
        }
      },
      mentors: {
        person1: {
          title: 'Psi Foo',
          subtitle: 'Company Alpha',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.'
        },
        person2: {
          title: 'Phi Baz',
          subtitle: 'Company Beta',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Do esse laborum consequat officia eu aliqua commodo reprehenderit.'
        },
        person3: {
          title: 'Phi Baz',
          subtitle: 'Company Gamma',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Laboris reprehenderit consequat occaecat enim.'
        },
        person4: {
          title: 'Phi Baz',
          subtitle: 'Company Omega',
          // image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'In veniam elit aliquip minim deserunt deserunt elit occaecat et.'
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