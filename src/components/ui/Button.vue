<template>
  <button @click="redirect" class="button">
    <p class="text">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: 'button',
  methods: {
    redirect: function() {
      this.$router.push('/')
    }
  },
  props: {
    content: String,
    link: String
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.button {
  padding: 12px 21px 12px 21px;
  margin: 5px;
  background-color: $std-bg-reg;
  border-radius: $border-radius-small;
  @include hoverShadow($std-shadow-reg, $std-shadow-hov);
}

.button:hover {
  cursor: pointer;
}

p {
  font-size: 1.25em;
  font-weight: bold;
  font-family: 'poppins', sans-serif;
}
</style>
