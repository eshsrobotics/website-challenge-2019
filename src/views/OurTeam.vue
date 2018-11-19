<template>
  <div class="our-team">
    <page-desc>
      <template name="title">
        <h1>Our Team</h1>
      </template>

      <template name="description">
        <p>Coaches, Mentors, and Officers all work together to make this club successfull! We thank them for their hard work! Take a look a the coaches and mentors below!</p>
      </template>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription.vue'

export default {
  name: 'our-team',
  components: [
    PageDesc
  ]
}
</script>
