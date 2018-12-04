<template>
  <li>
    <div class="route-label">
      <router-link :to="routeTo" >
        <p><slot></slot></p>
      </router-link>
    </div>
    <div v-if="hrBelow === true" class="divider-wrapper">
      <hr>
    </div>
  </li>
</template>

<script>
export default {
  mounted() {
    console.log(this.hrBelow);
  },
  props: {
    'routeTo': String,
    // Get prop; type must be string and the default value is false
    // Meaning by default, do not add the hr at the end
    hrBelow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.route-label {
  margin: 0px 5px 0px 5px;
  background-color: $std-bg-reg;
  border-radius: $border-radius-small;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
    background-color: $std-bg-hov;
  }

  &.router-link-exact-active {
    background-color: $oc-gray-3;
  }
}

hr {
  border: 0;
  margin-left: 5px;
  width: calc(100% - 10px);          
  height: 2px;
  background-color: $oc-gray-3;
  border-radius: $border-radius-small;
}

p {
  @include resetSpacing();
  font-family: 'poppins', sans-serif;
  color: $oc-gray-9;
  text-decoration: none;
  padding: 10px 15px;
  line-height: 100%;
}

a {
  text-decoration: none;
}

.router-link-exact-active p {
  color: $team-green;
  font-weight: bold;
}

</style>

