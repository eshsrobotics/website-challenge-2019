<template>
  <div class="coaches-and-mentors">
    <h2>Officers</h2>
    <layout-cards-overflow>
      <person-card :person="officers.spensor"></person-card>
      <person-card :person="officers.grace"></person-card>
      <person-card :person="officers.daniel"></person-card>
      <person-card :person="officers.james"></person-card>
      <person-card :person="officers.jasper"></person-card>
    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import PersonCard from '@/components/cards/PersonCard'

export default {
  name: 'officers',
  data() {
    let tempDesc = "Description of person. Short and concise. Well-written."
    return {
      officers: {
        spensor: {
          name: 'Spensor Moore',
          title: 'FRC',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        daniel: {
          name: 'Daniel Stamper',
          title: 'VEX',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        james: {
          name: 'James Lim',
          title: 'VEX',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        jasper: {
          name: 'Jasper Nelson',
          title: 'CyberPatriots',
          image: 'https://dummyimage.com/1280x960/dee2e6/212529',
          imageAltText: 'This is an important person',
          desc: tempDesc
        },
        grace: {
          name: 'Grace Ringuette',
          title: 'FRC',
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
    'person-card': PersonCard
  }
}
</script>