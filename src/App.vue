<template>
  <div id="app">
    <header-layout></header-layout>
    <main class="container margin-50-top-bottom">
      <router-view/>
    </main>
  </div>
</template>

<script>
  import HeaderLayout from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      HeaderLayout
    }
  }
</script>

<style>

</style>
