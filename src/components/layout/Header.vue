<template>
  <header class="grid slanted-bottom padding-50 text-center">

    <!-- TODO : responsive -->
    <!-- dashboard -->
    <router-link :to="{ name: 'Dashboard'}" title="See the dashboard"
                 class="anim-zoom absolute-top-right margin-30 padding rounded-circle bg-yang borders-2 hover-borders-clouds cursor-pointer transition-2">
      <img class="responsive" src="../../../src/assets/img/stats.png" alt=""/>
    </router-link>

    <div class="cell-12">
      <h1 class="font-size-jumbo size-giant-m size-big-xs margin-0 text-unstyled wide color-yang">
        <router-link class="inline-block transition-2 APP_font_ananda"
                     :to="{ name: 'Home'}"
                     title="Homepage">
          Learn your tables
        </router-link>
      </h1>
      <span
        class="APP_font_bebas text-wide size-medium size-normal-s color-peter-river">Tests on multiplication tables</span>
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

