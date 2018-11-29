<template>
  <div class="coaches-and-mentors">
    <c-breadcrumb></c-breadcrumb>
    <h1>Coaches and Mentors</h1>
    <h2>Coaches</h2>
    <layout-cards-overflow>
      <mentor-card>
        <h3>Chi Foo</h3>
        <p>Velit labore esse aliqua sint tempor non velit lorem.</p>
      </mentor-card>
      <mentor-card>
        <h3>Nu Bar</h3>
        <p>Commodo amet eiusmod laboris sit fugiat enim in aliquip ullamco eu officia.</p>
      </mentor-card>
    </layout-cards-overflow>

    <h2>Mentors</h2>
    <layout-cards-overflow>
      <mentor-card>
        <h3>Psi Foo</h3>
        <p>Aliquip occaecat velit ipsum nisi reprehenderit adipisicing nostrud.</p>
      </mentor-card>
      <mentor-card>
        <h3>Phi Baz</h3>
        <p>Magna commodo ipsum irure eiusmod pariatur reprehenderit consectetur ex labore.</p>
      </mentor-card>
      <mentor-card>
        <h3>Mu Foo</h3>
        <p>Ad aliqua laborum et laborum in labore consectetur esse.</p>
      </mentor-card>
    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import MentorCard from '@/components/cards/MentorCard'


export default {
  components: {
    'c-breadcrumb': CBreadcrumb,
    'layout-cards-overflow': LayoutCardsOverflow,
    'mentor-card': MentorCard
  }
}
</script>