<template>
  <div id="app">
    <header-layout></header-layout>
    <main class="container margin-50-top-bottom">
      <router-view :key="this.$route.fullPath"></router-view>
    </main>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
  import HeaderLayout from './components/layout/Header.vue'
  import FooterLayout from './components/layout/Footer.vue'

  export default {
    name: 'app',
    components: {
      FooterLayout,
      HeaderLayout
    },
    mounted(){
      //localStorage.clear()
      //console.log(localStorage)
    }
  }
</script>

<style>

</style>
