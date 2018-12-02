<template>
  <div class="blog">
    <page-heading/>
    <page-desc>
      <p>Not implemented yet.</p>
    </page-desc>
  </div>
</template>

<script>
import PageHeading from '@/components/ui/PageHeading'
import PageDesc from '@/components/PageDescription';

export default {
  
  name: 'blog',
  components: {
    'page-heading': PageHeading,
    'page-desc': PageDesc
  }
}
</script>
