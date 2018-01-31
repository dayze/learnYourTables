<template>
  <div class="overlay anim-backward very-fast">


    <div v-if="UserManager.checkOneUserExists()">
      <!-- choose title -->
      <div class="grid">
        <div class="cell-12">
          <h2 class="text-center margin-0-top size-medium wide uppercase weight-light">
            Select a mode</h2>
        </div>
      </div>

      <!-- mods selection -->
      <div class="grid-column-xs text-center align-items-center align-items-stretch-s justify-center-s">

        <router-link :to="{ name: 'LearningMode'}"
                     class="cell-4 cell-8-s hover-shaded-box cursor-pointer bg-yang">
          <figure>
            <div
              class="inline-block rounded-circle padding-30 padding-m borders-3 borders-clouds margin-50-top-bottom margin-top-bottom-s">
              <img
                class="responsive"
                src="../assets/img/brain.png"
                alt=""/>
            </div>
            <figcaption class="APP_bg_board margin-top font-size-big size-medium-s APP_font_ananda padding color-yang">
              Learning
            </figcaption>
          </figure>
        </router-link>


        <router-link :to="{ name: 'Choices'}"
                     class="cell-4 cell-8-s hover-shaded-box cursor-pointer bg-yang">
          <figure>
            <div
              class="inline-block rounded-circle padding-30 padding-m borders-3 borders-clouds margin-50-top-bottom margin-top-bottom-s">
              <img
                class="responsive"
                src="../assets/img/test.png"
                alt=""/>
            </div>
            <figcaption
              class="APP_bg_board margin-top font-size-big size-medium-s APP_font_ananda padding color-yang">
              Test
            </figcaption>
          </figure>
        </router-link>


        <router-link :to="{ name: 'Choices', params: {testType: TEST_TYPE_EVALUATION} }"
                     class="cell-4 cell-8-s hover-shaded-box cursor-pointer bg-yang"
                     v-if="UserManager.getCurrentUser().hasUnlockedEvaluationMod">
          <figure>
            <div
              class="inline-block rounded-circle padding-30 padding-m borders-3 borders-clouds margin-50-top-bottom margin-top-bottom-s">
              <img
                class="responsive"
                src="../assets/img/evaluation.png"
                alt=""/>
            </div>
            <figcaption
              class="APP_bg_board margin-top font-size-big size-medium-s APP_font_ananda padding color-yang">
              Evaluation
            </figcaption>
          </figure>
        </router-link>

        <div class="cell-4 cell-8-s shaded-box cursor-not-allowed bg-yang" v-else>
          <figure class="opacity-light">
            <div
              class="inline-block rounded-circle padding-30 padding-m borders-3 borders-clouds margin-50-top-bottom margin-top-bottom-s">
              <img
                class="responsive"
                src="../assets/img/evaluation.png"
                alt=""/>
            </div>
            <figcaption
              class="APP_bg_board margin-top font-size-big size-medium-s APP_font_ananda padding color-yang">
              Evaluation
            </figcaption>
          </figure>
          <div class="absolute-row-middle">
            <h2 class="font-size-big color-alizarin">Locked !</h2>
            <span class="padding font-weight-bold">Test yourself with all the tables to unlock this mod.</span>
          </div>

        </div>

      </div>
    </div>

    <div v-else>
      <form-add-user></form-add-user>
    </div>

  </div>
</template>

<script>
  import { TEST_TYPE_EVALUATION, TEST_TYPE_LEARNING } from './../const'
  import FormAddUser from '../components/FormAddUser.vue'
  import UserManager from '../model/UserManager'

  export default {
    name: 'Home',
    components: {
      FormAddUser
    },
    data () {
      return {
        UserManager: new UserManager(),
        TEST_TYPE_EVALUATION,
        TEST_TYPE_LEARNING
      }
    }
  }
</script>

