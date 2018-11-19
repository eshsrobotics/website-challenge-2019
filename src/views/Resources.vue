<template>
  <div class="resources">
    <page-desc>
      <template name="title">
       <h1>Resouces</h1>
      </template>
      <template name="description">
        <p>Links to various external services and resources the club uses on a regular basis. Please navigate to the links below.</p>
      </template>
    </page-desc>

    <resource-container>
      <slot>
        <h3>Category</h3>
      </slot>
    </resource-container>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription';
import ResourceContainer from '@/components/ResourceContainer';

export default {
  name: 'resources',
  data() {
    return {
      resources: [
        {
          title: 'General',
          resources: [
            {
              name: 'Slack',
              url: 'https://eshs-robotics.slack.com/',
              desc: 'Central communication platform'
            }
          ]
        },
        {
          title: 'GitHub',
          resources: [
            {
              name: 'GitHub',
              url: 'https://github.com/eshsrobotics/',
              desc: 'Collection of code repositories created by the club over the years'
            },
            {
              name: 'Wiki',
              url: 'https://github.com/eshsrobotics/database/wiki',
              desc: 'Everything you need to know about being a P.O.T.A.T.O.E.'
            },
            {
              name: 'Branding',
              url: 'https://github.com/eshsrobotics/database/wiki/Branding-Guideline',
              desc: 'Team branding guideline & logo files'
            }
          ]
        }
      ]
    }
  },
  components: [
    PageDesc,
    ResourceContainer
  ]
}
</script>
