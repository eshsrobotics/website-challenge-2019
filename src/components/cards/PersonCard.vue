<template>
  <div class="person">
    <slot>
        <h3>Person</h3>
        <h4>Optional subheading</h4>
        <img :src="image.url" :alt="image.altText">
        <p>Description of person. Include more information and fill up space.</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'personCard',
  props: {
    image: {
      type: Object,
      default: () => ({
        url: 'https://dummyimage.com/1280x960/dee2e6/212529',
        altText: 'This is an important person'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

img {
  width: 100%;
  border-radius: $border-radius-small;
}

.person {
  @include genericCard("false");
  width: 200px;
  margin-bottom: 20px;
}

h3, h4 {
  // text-align: center;
}

p {
  // text-align: center;
}

</style>