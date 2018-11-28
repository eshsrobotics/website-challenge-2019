<template>
  <div class="coaches-and-mentors">
    <c-breadcrumb></c-breadcrumb>
    <h1>Officers</h1>
    <layout-cards-overflow>
      <officer-card>
        <h3>Mu Foo</h3>
        <p>Velit labore esse aliqua sint tempor non velit lorem.</p>
      </officer-card>
      <officer-card>
        <h3>Chi Bar</h3>
        <p>Commodo amet eiusmod laboris sit fugiat enim in aliquip ullamco eu officia.</p>
      </officer-card>
      <officer-card>
        <h3>Nu Foo</h3>
        <p>Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.</p>
      </officer-card>
      <officer-card>
        <h3>Psi Baz</h3>
        <p>Magna commodo ipsum irure eiusmod pariatur reprehenderit consectetur ex labore.</p>
      </officer-card>
      <officer-card>
        <h3>Phi Foo</h3>
        <p>Ad aliqua laborum et laborum in labore consectetur esse.</p>
      </officer-card>
    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import OfficerCard from '@/components/cards/OfficerCard'


export default {
  components: {
    'c-breadcrumb': CBreadcrumb,
    'layout-cards-overflow': LayoutCardsOverflow,
    'officer-card': OfficerCard
  }
}
</script>