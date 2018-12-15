<template>
  <div class="team">
    <c-block :blockData="teamBlock">
      <h2>About the Team</h2>
      <p>Aliqua cillum pariatur adipisicing esse tempor mollit. Veniam eu ullamco ullamco ipsum amet est quis nulla officia nisi exercitation laboris. Qui mollit est adipisicing sint proident cupidatat ut qui velit dolore consectetur. Ex aute aliqua commodo quis in culpa consectetur sit velit ex consectetur occaecat. Reprehenderit magna laboris duis exercitation esse commodo elit qui ad aliquip et nisi.</p>
    </c-block>
    <c-block :blockData="teamStructure">
      <h2>Team Structure</h2>
      <p>Est aliqua dolor aliqua aliqua ea deserunt. Sunt laborum dolor consectetur magna cillum non deserunt id in cupidatat dolor cillum aliquip. Voluptate consequat in magna proident aute et cillum occaecat nisi esse cillum. Amet aute dolor deserunt culpa sunt nulla et est laborum officia consequat proident culpa.</p>
    </c-block>
    <c-block :blockData="teamRecruitment">
      <h2>Recruitment Efforts</h2>
      <p>Est aliqua dolor aliqua aliqua ea deserunt. Sunt laborum dolor consectetur magna cillum non deserunt id in cupidatat dolor cillum aliquip. Voluptate consequat in magna proident aute et cillum occaecat nisi esse cillum. Amet aute dolor deserunt culpa sunt nulla et est laborum officia consequat proident culpa.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur, id laudantium nam quidem sed voluptatum. At commodi debitis dolorem ducimus minus omnis qui temporibus. Amet enim iusto minima nostrum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore illo iure nemo perferendis praesentium quibusdam vero! Accusantium dolores esse quis quos repudiandae. Cupiditate, distinctio, hic. Debitis dolor eaque vel!</p>
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
        image: 'https://dummyimage.com/1280x720/dee2e6/212529',
        imageAltText: 'Dummy Image',
        photoPosition: 'right'
      },
      teamStructure: {
        image: 'https://github.com/eshsrobotics/database/blob/master/marketing%20and%20media/team%20structure/Team%20Structure%20Diagram%20Version%202.png?raw=true',
        imageAltText: 'A diagram of the team\'s structure',
        photoPosition: 'right'
      },
      teamRecruitment: {
        image: 'https://github.com/eshsrobotics/database/blob/master/marketing%20and%20media/recruitment%20posters/vrc%20poster/Final%20Simple%20Robotics%20Poster.png?raw=true',
        imageAltText: 'Photograph of a poster advocating to join the robotics club.',
        photoPosition: 'left'
      }
  }

  },
  components: {
    'c-breadcrumb': CBreadcrumb,
    'c-block': CBlock
  }
}
</script>