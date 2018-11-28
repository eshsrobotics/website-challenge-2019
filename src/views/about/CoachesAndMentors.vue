<template>
  <div class="coaches-and-mentors">
    <c-breadcrumb></c-breadcrumb>
    <h1>Coaches and Mentors</h1>
    <h2>Coaches</h2>
    <layout-cards-overflow>
      <mentor-card>
        <h3>Foo Bar</h3>
      </mentor-card>
    </layout-cards-overflow>

    <h2>Mentors</h2>
    <layout-cards-overflow>

    </layout-cards-overflow>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import LayoutCardsOverflow from '@/components/cards/LayoutCardsOverflow'
import OfficerCard from '@/components/cards/MentorCard'

export default {
  components: {
    'c-breadcrumb': CBreadcrumb,
    'layout-cards-overflow': LayoutCardsOverflow,
    'mentor-card': OfficerCard
  }
}
</script>