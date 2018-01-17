<template>
  <div class="overlay anim-backward fast">

    <!-- choose title -->
    <div class="grid">
      <div class="cell-12">
        <h2 class="text-center margin-0-top size-medium wide uppercase weight-light">
          Select a mode</h2>
      </div>
    </div>

    <!-- mode selection -->
    <div class="grid-column-xs text-center align-items-center align-items-stretch-xs">

      <router-link :to="{ name: 'LearningMode'}"
                   class="cell-4 cell-6-m hover-shaded-box cursor-pointer">
        <figure>
          <img
            class="responsive rounded-circle padding-30 padding-s borders-3 borders-clouds margin-50-top-bottom margin-top-bottom-s"
            src="../assets/img/brain.png"
            alt=""/>
          <figcaption class="APP_bg_board margin-top font-size-big size-medium-s APP_font_ananda padding color-yang">
            Learning
          </figcaption>
        </figure>
      </router-link>


      <router-link :to="{ name: 'LearningMode'}"
                   class="cell-4 cell-6-m hover-shaded-box cursor-pointer">
        <figure>
          <img
            class="responsive rounded-circle padding-30 padding-s borders-3 borders-clouds margin-50-top-bottom margin-top-bottom-s"
            src="../assets/img/test.png"
            alt=""/>
          <figcaption class="APP_bg_board margin-top font-size-big size-medium-s APP_font_ananda padding color-yang">
            Test
          </figcaption>
        </figure>
      </router-link>


      <router-link :to="{ name: 'LearningMode'}"
                   class="cell-4 cell-6-m hover-shaded-box cursor-pointer">
        <figure>
          <img
            class="responsive rounded-circle padding-30 padding-s borders-3 borders-clouds margin-50-top-bottom margin-top-bottom-s"
            src="../assets/img/mistery-test.png"
            alt=""/>
          <figcaption class="APP_bg_board margin-top font-size-big size-medium-s APP_font_ananda padding color-yang">
            Mistery test
          </figcaption>
        </figure>
      </router-link>


    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data () {
      return {}
    }
  }
</script>

