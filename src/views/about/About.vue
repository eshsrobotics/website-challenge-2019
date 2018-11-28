<template>
  <div class="about">
    <c-breadcrumb></c-breadcrumb>
    <h1>About</h1>
    <c-block :data="historyBlock">
      <h2>History</h2>
      <p>Incididunt deserunt dolor tempor cillum non consectetur ullamco excepteur commodo ex voluptate dolore. In ut non voluptate do commodo incididunt fugiat officia irure aliquip. Eiusmod minim consectetur amet aliquip irure. Quis velit cupidatat in qui. Ut tempor qui et ipsum. Aliquip nostrud irure id occaecat irure nulla mollit Lorem.</p>
    </c-block>
    <c-block :data="coreValuesBlock">
      <h2>Core Values</h2>
      <p>Lorem ad tempor exercitation laboris voluptate consectetur quis dolor nisi Lorem do ex exercitation. Culpa ipsum ea voluptate aute in non quis in velit. Mollit aliqua ex mollit deserunt consequat.</p>
    </c-block>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CBreadcrumb from '@/components/ui/Breadcrumb'
import CBlock from '@/components/ui/Block'

export default {
  data() {
    return {
      historyBlock: {
        photoURL: 'https://dummyimage.com/1280x960/dee2e6/212529',
        photoDesc: 'Dummy Image',
        photoPosition: 'right'
      },
      coreValuesBlock: {
        photoURL: 'https://dummyimage.com/1280x960/dee2e6/212529',
        photoDesc: 'Dummy Image',
        photoPosition: 'left'
      }
    }
  },
  components: {
    'page-desc': PageDesc,
    'c-breadcrumb': CBreadcrumb,
    'c-block': CBlock
  }
}
</script>
