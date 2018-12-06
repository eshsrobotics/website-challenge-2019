<template>
  <div class="team">
    <c-block :data="teamBlock">
      <h2>About the Team</h2>
      <p>Aliqua cillum pariatur adipisicing esse tempor mollit. Veniam eu ullamco ullamco ipsum amet est quis nulla officia nisi exercitation laboris. Qui mollit est adipisicing sint proident cupidatat ut qui velit dolore consectetur. Ex aute aliqua commodo quis in culpa consectetur sit velit ex consectetur occaecat. Reprehenderit magna laboris duis exercitation esse commodo elit qui ad aliquip et nisi.</p>
    </c-block>
    <c-block :data="teamStructure">
      <h2>Team Structure</h2>
      <p>Est aliqua dolor aliqua aliqua ea deserunt. Sunt laborum dolor consectetur magna cillum non deserunt id in cupidatat dolor cillum aliquip. Voluptate consequat in magna proident aute et cillum occaecat nisi esse cillum. Amet aute dolor deserunt culpa sunt nulla et est laborum officia consequat proident culpa.</p>
    </c-block>
  </div>
</template>

<script>
import CBreadcrumb from '@/components/ui/Breadcrumb'
import CBlock from '@/components/ui/Block'

export default {
  name: 'team',
  data() {
    return {
      teamBlock: {
        photoURL: 'https://dummyimage.com/1280x720/dee2e6/212529',
        photoDesc: 'Dummy Image',
        photoPosition: 'right'
      },
      teamStructure: {
        photoURL: 'https://dummyimage.com/1280x720/dee2e6/212529',
        photoDesc: 'Dummy Image',
        photoPosition: 'right'
      }
  }

  },
  components: {
    'c-breadcrumb': CBreadcrumb,
    'c-block': CBlock
  }
}
</script>