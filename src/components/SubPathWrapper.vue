<template>
  <div class="sub-path-wrapper">
    <router-view/>
  </div>
</template>

<script>
// This is a general wrapper for routes in vue-router that have children elements. For now, we don't need any general styling surrounding those children componetns
// Additionally, any styling should probably be made to all componetns with children elements, so we have one common place for this abstract, rather than many, as previously
export default {
  name: 'subPathWrapper'
}
</script>