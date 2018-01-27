<template>
  <header>
    <div class="grid-column-m slanted-bottom padding-50 padding-l text-center justify-center align-items-center-m">

      <div class="cell-8 offset-2 cell-6-l offset-3-l offset-0-m">
        <h1 class="font-size-jumbo size-giant-l size-big-xs margin-0 text-unstyled wide color-yang">
          <router-link class="inline-block transition-2 APP_font_ananda"
                       :to="{ name: 'Home'}"
                       title="Homepage">
            Learn your tables
          </router-link>
        </h1>
        <span
          class="APP_font_bebas text-wide size-medium size-normal-s color-emerald">Tests on multiplication tables</span>
      </div>


      <div class="cell-2 cell-3-l">
        <ul class="list-unstyled text-right padding-right-diffuser">
          <!-- dashboard -->
          <li>
            <router-link :to="{ name: 'Account'}" title="Account management" class="bg-emerald button margin-bottom-m">
              <span class="align-middle color-yang">Habit Jérémy</span>
              <img class="responsive margin-5-left" src="../../../src/assets/img/login.png" alt=""/>
            </router-link>
          </li>
        </ul>
      </div>

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

