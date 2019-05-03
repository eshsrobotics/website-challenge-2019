<template>
  <page-desc>
    <h1>Oops!</h1>
    <p>The link was not found.</p>
    <img src="img/robotics-logo.cc816273.png" alt="">
    <p>Learn about the Robotics Competition while you're here!</p>
    <router-link to="/">
      <c-button>Learn More</c-button>
    </router-link>
  </page-desc>
</template>

<script>
import CButton from '@/components/ui/CButton'
import PageDesc from '@/components/PageDescription'

export default {
  name: "404",
  components: {
    'c-button': CButton,
    'page-desc': PageDesc,
  }
}
</script>

<style scoped lang="scss">
img {
  height: calc(100vh - 500px);
  animation: slidein 0.25s ease-in;
}

@keyframes slidein {
  0% {
    transform: translateY(15px) scale(0.9, 0.9);
    opacity: 0;
  }
  100% {
    transform: translateY(0px) scale(1, 1);
    opacity: 1;
  }
}
</style>