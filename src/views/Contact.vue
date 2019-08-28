<template>
  <div class="contact">
    <p>Contact the El Segundo High School Robotics club by sending an electronic mail message to their electronic mail box. Please send all inquiries to</p>
    <p class="g">e</p>
    <p class=g>shspotat</p>oes
    (<p class="g">a</p>t)
    <p class="g">g</p>
    <p class="g">m</p>
    <p class="g">ail</p>
    <p class="g"> (dot) com</p>
  </div>

</template>

<script>
  // Weird semantics so bots don't get electronic mail address
export default {
  name: 'contact'
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
}

.g {
  display: inline;
}
</style>
