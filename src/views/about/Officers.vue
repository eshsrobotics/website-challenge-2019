<template>
  <div class="coaches-and-mentors">
    <h2>Officers</h2>
    <layout-cards-overflow>
      <card-generic :cardInfo="officers.spensor"></card-generic>
      <card-person :person="officers.spensor"></card-person>
      <card-person :person="officers.grace"></card-person>
      <card-person :person="officers.daniel"></card-person>
      <card-person :person="officers.james"></card-person>
      <card-person :person="officers.jasper"></card-person>
      <card-person :person="officers.lizzie"></card-person>
    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import CardPerson from '@/components/cards/CardPerson'
import CardGeneric from '@/components/cards/CardGeneric'

export default {
  name: 'officers',
  data() {
    let tempDesc = 'Description of person. Short and concise. Well-written.'
    return {
      officers: {
        spensor: {
          title: 'Spensor Moore',
          subtitle: 'FRC Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        daniel: {
          title: 'Daniel Stamper',
          subtitle: 'VEX Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        james: {
          title: 'James Lim',
          subtitle: 'VEX Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        jasper: {
          title: 'Jasper Nelson',
          subtitle: 'CyberPatriots Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        grace: {
          title: 'Grace Ringuette',
          subtitle: 'FRC Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        lizzie: {
          title: 'Lizzie kapoor',
          subtitle: 'Marketing Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        }
      }
    }
  },
  components: {
    'c-breadcrumb': CBreadcrumb,
    'layout-cards-overflow': LayoutCardsOverflow,
    'card-person': CardPerson,
    'card-generic': CardGeneric
  }
}
</script>