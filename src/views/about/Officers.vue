<template>
  <div class="coaches-and-mentors">
    <h2>Officers</h2>
    <layout-cards-overflow>
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

export default {
  name: 'officers',
  data() {
    let tempDesc = "Description of person. Short and concise. Well-written."
    return {
      officers: {
        spensor: {
          name: 'Spensor Moore',
          title: 'FRC Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        daniel: {
          name: 'Daniel Stamper',
          title: 'VEX Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        james: {
          name: 'James Lim',
          title: 'VEX Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        jasper: {
          name: 'Jasper Nelson',
          title: 'CyberPatriots Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        grace: {
          name: 'Grace Ringuette',
          title: 'FRC Captain',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        lizzie: {
          name: 'Lizzie kapoor',
          title: 'Marketing Captain',
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
    'card-person': CardPerson
  }
}
</script>