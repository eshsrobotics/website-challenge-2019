<template>
  <div class="coaches-and-mentors">
    <h2>Coaches</h2>
    <p>We are grateful to our coaches for working hard to administer and drive the robotics club towards a positive direction.</p>
    <layout-cards-overflow>
      <card-person :person="coaches.davis"></card-person>
      <card-person :person="coaches.horvath"></card-person>
      <card-person :person="coaches.robinson"></card-person>
    </layout-cards-overflow>

    <h2>Mentors</h2>
    <p>We thank our mentos for dedicating their time to use their knowledge to guide the club to a better future.</p>
    <layout-cards-overflow>
      <card-person :person="mentors.person1"></card-person>
      <card-person :person="mentors.person2"></card-person>
      <card-person :person="mentors.person3"></card-person>
      <card-person :person="mentors.person4"></card-person>
    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import CardPerson from '@/components/cards/CardPerson'


export default {
  name: 'coachesAndMentors',
  data() {
    return {
      coaches: {
        davis: {
          name: 'Alan Davis',
          title: 'VEX Coach',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.'
        },
        horvath: {
          name: 'Danial Horvath',
          title: 'FRC Coach',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Lorem exercitation tempor quis est.'
        },
        robinson: {
          name: 'Joelle Robinson',
          title: 'Cyberpatriots Coach',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Nulla voluptate et magna reprehenderit commodo ea consectetur.'
        }
      },
      mentors: {
        person1: {
          name: 'Psi Foo',
          title: 'Company Alpha',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.'
        },
        person2: {
          name: 'Phi Baz',
          title: 'Company Beta',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Do esse laborum consequat officia eu aliqua commodo reprehenderit.'
        },
        person3: {
          name: 'Phi Baz',
          title: 'Company Gamma',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Laboris reprehenderit consequat occaecat enim.'
        },
        person4: {
          name: 'Phi Baz',
          title: 'Company Omega',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'In veniam elit aliquip minim deserunt deserunt elit occaecat et.'
        }
      }
    }
  },
  components: {
    'c-breadcrumb': CBreadcrumb,
    'layout-cards-overflow': LayoutCardsOverflow,
    'card-person': CardPerson
  }
}
</script>