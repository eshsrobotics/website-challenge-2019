<template>
  <div class="about">
    <c-block :data="coreValuesBlock">
      <h2>Core Values</h2>
      <p>Lorem ad tempor exercitation laboris voluptate consectetur quis dolor nisi Lorem do ex exercitation. Culpa ipsum ea voluptate aute in non quis in velit. Mollit aliqua ex mollit deserunt consequat.</p>
    </c-block>
    <h2>History</h2>
    <c-block :data="historyEarly">
      <h3>Early Beginnings</h3>
      <p>Incididunt deserunt dolor tempor cillum non consectetur ullamco excepteur commodo ex voluptate dolore. In ut non voluptate do commodo incididunt fugiat officia irure aliquip. Eiusmod minim consectetur amet aliquip irure. Quis velit cupidatat in qui. Ut tempor qui et ipsum. Aliquip nostrud irure id occaecat irure nulla mollit Lorem.</p>
      <p>Deserunt esse et ullamco adipisicing nisi incididunt commodo. Laborum ex sunt et duis. Aliqua est nulla ut ad veniam ex commodo sit ad commodo occaecat. Cupidatat proident cillum proident sint minim id sit. Qui veniam adipisicing cupidatat qui dolor sunt.</p>
    </c-block>
    <c-block :data="historyDevelopment">
      <h3>Club Development</h3>
      <p>Occaecat occaecat duis excepteur eiusmod eu aute aliquip reprehenderit sunt elit dolore do reprehenderit. Dolor qui Lorem anim veniam voluptate. Aute consectetur reprehenderit nulla consequat. Proident deserunt aliquip dolore exercitation nulla incididunt sunt ullamco consectetur veniam anim adipisicing. Tempor commodo eu aute ex minim occaecat ex laborum.</p>
    </c-block>
    <c-block :data="historyRecent">
      <h3>Recent Years</h3>
      <p>Ipsum ut eiusmod pariatur irure. Lorem fugiat eu eu ullamco tempor sunt quis nostrud amet consequat. Nostrud ad veniam quis nulla deserunt ex duis veniam duis. Incididunt et ad aliquip nulla eu minim laborum officia est laborum ipsum. Velit consequat Lorem exercitation proident. Nulla laboris id veniam enim cupidatat ex sit.</p>
      <p>Mollit consequat cillum ipsum ipsum nostrud officia ipsum qui aliquip cupidatat irure. Minim cillum sint est officia enim id ea laboris elit est exercitation sit. Aliqua mollit aliqua voluptate elit ullamco aliquip. Fugiat culpa dolor Lorem ipsum. Et ex esse excepteur anim ea duis exercitation occaecat cupidatat eiusmod. Ea mollit dolor Lorem eiusmod nostrud dolore proident cillum amet anim. Mollit aliquip officia non nulla anim incididunt.</p>
    </c-block>
  </div>
</template>

<script>
import PageDesc from '@/components/PageDescription'
import CBreadcrumb from '@/components/ui/Breadcrumb'
import CBlock from '@/components/ui/Block'

export default {
  name: 'about',
  data() {
    return {
      coreValuesBlock: {
        photoURL: 'https://dummyimage.com/1280x720/dee2e6/212529',
        photoDesc: 'Dummy Image',
        photoPosition: 'left'
      },
      historyEarly: {
        photoURL: 'https://dummyimage.com/1280x720/dee2e6/212529',
        photoDesc: 'Dummy Image',
        photoPosition: 'right'
      },
      historyDevelopment: {
        photoURL: 'https://dummyimage.com/1280x720/dee2e6/212529',
        photoDesc: 'Dummy Image',
        photoPosition: 'right'
      },
      historyRecent: {
        photoURL: 'https://dummyimage.com/1280x720/dee2e6/212529',
        photoDesc: 'Dummy Image',
        photoPosition: 'right'
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

<style scoped lang="scss">
@import '@/styles/variables.scss';
</style>