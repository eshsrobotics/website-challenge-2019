<template>
  <div class="resources-wrapper">
    <page-heading/>
    <router-view/>
  </div>
</template>

<script>
import PageHeading from '@/components/ui/PageHeading'

export default {
  name: 'AboutWrapper',
  components: {
    'page-heading': PageHeading
  }
}
</script>

<style scoped lang="scss">
  
</style>