<template>
  <div class="card-media">
    <h4>{{ event.name }}</h4>
    <img :src="event.photo" :alt="imageAltText">
    <p>{{ event.desc }}</p>
  </div>
</template>


<script>
  export default {
    name: 'cardMedia',
    computed: {
      imageAltText: function() {
        return 'A photograph taken at the ' + this.event.name + ' competition.'
      }
    },
    props: {
      event: {
        type: Object,
        default: () => ({
          name: "Event Name",
          photo: "https://dummyimage.com/1280x960/dee2e6/212529",
          desc: "Description of Event"
        })
      }
    }
  }
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

img {
  width: 275px;
}

.card-media {
  @include genericCard();
}
</style>