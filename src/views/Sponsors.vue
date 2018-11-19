<template>
  <div class="sponsors">
    <page-desc>
      <template name="title">
       <h1>Sponsors</h1>
      </template>
      <template name="description">
        <p>Here you can find all of the P.O.TA.T.O.E.S.’s sponsors. In addition to a list, you can also find out how to become a sponsor!</p>
      </template>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';

export default {
  name: 'sponsors',
  components: [
    PageDesc
  ]
}
</script>
