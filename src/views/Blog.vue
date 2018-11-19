<template>
  <div class="blog">
    <page-desc>
      <template name="title">
       <h1>Blog</h1>
      </template>
      <template name="description">
        <p>Everyday posts about engineering and potatoes. Everyday posts about engineering and potatoes. Everyday posts about engineering and potatoes.</p>
      </template>
    </page-desc>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';

export default {
  name: 'blog',
  components: [
    PageDesc
  ]
}
</script>
