<template>
  <div class="about">
    <c-breadcrumb></c-breadcrumb>
    <page-desc>
      <h1>About</h1>
      <p>Not implemented yet.</p>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CBreadcrumb from '@/components/ui/Breadcrumb'

export default {
  components: {
    'page-desc': PageDesc,
    'c-breadcrumb': CBreadcrumb
  }
}
</script>
