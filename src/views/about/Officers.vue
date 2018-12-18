<template>
  <div class="coaches-and-mentors">
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
  name: 'officers',
  data() {
    let tempDesc = 'Description of person. Short and concise. Well-written.'
    return {
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