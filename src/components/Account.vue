<template>
  <div class="overlay anim-backward very-fast">

    <!-- title -->
    <div class="grid">
      <div class="cell-12">
        <h1 class="margin-0 size-big margin-0-top borders-bottom borders-silver">
          <span>Account management</span>
        </h1>
      </div>
    </div>

    <div class="grid">

      <!-- current user -->
      <div class="cell-12">
        <div class="grid">
          <div class="cell-12 text-center">
            <div class="font-size-giant margin-bottom">
              <span>Habit</span>
              <span>Jérémy</span>
            </div>
            <router-link :to="{ name: 'Dashboard'}" title="See statistics" class="bg-emerald button margin-bottom-m">
              <img class="responsive margin-5-right" src="../../src/assets/img/stats.png" alt=""/>
              <span class="align-middle color-yang">Statistics</span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- change an other one account -->
      <div class="cell-12">
        <h2>Change current user</h2>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'Account',
    data () {
      return {}
    }
  }
</script>

