<template>
  <header class="grid slanted-bottom padding-50 text-center">
    <!-- dashboard -->
    <router-link :to="{ name: 'Dashboard'}" title="See the dashboard"
                 class="absolute-top-right margin-30 padding rounded-circle bg-yang cursor-pointer borders-3 borders-sun-flower hover-borders-silver transition-3">
      <img class="responsive" src="../../../src/assets/img/stats.png" alt=""/>
    </router-link>
    <div class="cell-12">
      <h1 class="font-size-jumbo font-size-giant-m font-size-big-xs margin-0 text-unstyled font-italic color-yang">
        <router-link class="color-sun-flower inline-block transition-2 APP_font_bebas hover-color-clouds"
                     :to="{ name: 'Home'}"
                     title="Homepage">
          Learn your tables
        </router-link>
      </h1>
      <span
        class="APP_font_ananda text-wide font-size-medium font-size-normal-s color-yang">Tests on multiplication tables</span>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'HeaderLayout',
    data () {
      return {}
    }
  }
</script>

