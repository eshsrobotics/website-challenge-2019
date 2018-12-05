<template>
  <div class="coaches-and-mentors">
    <layout-cards-overflow>
      <person-card>
        <h3>Mu Foo</h3>
        <p>Velit labore esse aliqua sint tempor non velit lorem.</p>
      </person-card>
      <person-card>
        <h3>Chi Bar</h3>
        <p>Commodo amet eiusmod laboris sit fugiat enim in aliquip ullamco eu officia.</p>
      </person-card>
      <person-card>
        <h3>Nu Foo</h3>
        <p>Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.</p>
      </person-card>
      <person-card>
        <h3>Psi Baz</h3>
        <p>Magna commodo ipsum irure eiusmod pariatur reprehenderit consectetur ex labore.</p>
      </person-card>
      <person-card>
        <h3>Phi Foo</h3>
        <p>Ad aliqua laborum et laborum in labore consectetur esse.</p>
      </person-card>
      <person-card>
        <h3>Chi Foo</h3>
        <p>Commodo amet eiusmod laboris sit fugiat enim in aliquip ullamco eu officia.</p>
      </person-card>
      <person-card>
        <h3>Nu Baz</h3>
        <p>Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.</p>
      </person-card>
    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import PersonCard from '@/components/cards/PersonCard'


export default {
  name: 'officers',
  components: {
    'c-breadcrumb': CBreadcrumb,
    'layout-cards-overflow': LayoutCardsOverflow,
    'person-card': PersonCard
  }
}
</script>