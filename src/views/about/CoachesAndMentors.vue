<template>
  <div class="coaches-and-mentors">
    <h2>Coaches</h2>
    <layout-cards-overflow>
      <person-card :person="coaches.person1"></person-card>
      <person-card :person="coaches.person2"></person-card>
      <person-card :person="coaches.person3"></person-card>
      <person-card :person="coaches.person4"></person-card>
      <person-card :person="coaches.person5"></person-card>
    </layout-cards-overflow>

    <h2>Mentors</h2>
    <layout-cards-overflow>
      <person-card :person="mentors.person1"></person-card>
      <person-card :person="mentors.person2"></person-card>
      <person-card :person="mentors.person3"></person-card>
      <person-card :person="mentors.person4"></person-card>
    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import PersonCard from '@/components/cards/CardPerson'


export default {
  name: 'coachesAndMentors',
  data() {
    return {
      coaches: {
        person1: {
          name: 'Nu Foo',
          title: 'Company Alpha',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.'
        },
        person2: {
          name: 'Mu Baz',
          title: 'Company Beta',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Lorem exercitation tempor quis est.'
        },
        person3: {
          name: 'Nu Baz',
          title: 'Company Gamma',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Nulla voluptate et magna reprehenderit commodo ea consectetur.'
        },
        person4: {
          name: 'Mu Baz',
          title: 'Company Beta',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Sunt officia adipisicing Lorem elit.'
        },
        person5: {
          name: 'Nu Baz',
          title: 'Company Gamma',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: 'Tempor ea eu do sunt ut cupidatat et ex amet cupidatat nostrud proident.'
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
    'person-card': PersonCard
  }
}
</script>