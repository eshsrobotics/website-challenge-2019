<template>
  <div class="person">
    <h3>{{ person.name }}</h3>
    <h4>{{ person.title }}</h4>
    <img :src="person.image" :alt="person.imageAltText">
    <p>{{ person.desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'personCard',
  props: {
    person: {
      type: Object,
      default: () => ({
        name: 'First Last',
        title: 'Optional Subheading',
        image: 'https://dummyimage.com/1280x960/dee2e6/212529',
        imageAltText: 'This is an important person',
        desc: 'Description of mentor or officer that adequately describes mentor or officer.'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

img {
  width: 100%;
  border-radius: $border-radius;
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