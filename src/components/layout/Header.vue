<template>
  <header class="grid slanted-bottom padding-50 text-center">
    <div class="cell-12">
      <h1 class="font-size-jumbo font-size-giant-m font-size-big-xs margin-0 text-unstyled font-italic color-yang">
        <router-link class="inline-block transition-2 APP_font_ananda hover-color-clouds" :to="{ name: 'Home'}"
                     title="Homepage">
          Learn Your Tables
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

