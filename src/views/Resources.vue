<template>
  <div class="resources">
    <page-desc>
      <h1>Resouces</h1>
      <p>Links to various external services and resources the club uses on a regular basis. Please navigate to the links below.</p>
    </page-desc>

    <resource-container>
      <slot>
        <h3>Category</h3>
        <p> {{ allResources }} </p>
      </slot>
    </resource-container>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';
import ResourceContainer from '@/components/ResourceContainer';
import teamResources from '@/json/teamResources';

export default {
  name: 'resources',
  data() {
    return {
      allResources: teamResources
    }
  },
  components: {
    'page-desc': PageDesc,
    'resource-container': ResourceContainer
  }
}
</script>
