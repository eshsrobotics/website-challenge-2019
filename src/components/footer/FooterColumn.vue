<template>
  <div class="column">
    <slot class="column"></slot>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped lang="scss">
.column {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style-type: none;
}

a {
  display: flex;
  flex-direction: row;
  align-items: center;
}

svg {
  margin-right: 5px;
}

// Remember this font-size overrides the values in variables.scss
p {
  font-size: 1em;
}

.label {
  font-weight: bold;
}

a {
  font-size: 0.95em;
}
</style>