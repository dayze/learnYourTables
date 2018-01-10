<template>
  <div>

    <!-- Welcome note -->

    <div class="grid">
      <div class="cell-12">
        <h2 class="font-size-big text-center-m">Here we go !</h2>
        <p class="font-size-big text-center">Which table do you choose ? </p>
      </div>
    </div>

    <!-- tables -->
    <div class="grid justify-center-m">
      <router-link :key="index" :class="[index === 0 || index === 5 ? 'offset-1 offset-0-m' : '', 'bg-' + color + '-pronounced', 'hover-bg-' + color]"
                   class="cell-2 cell-3-m cell-4-s cell-6-xs shaded-box text-center color-yang cursor-pointer hover-shaded-box padding" v-for="(color, index) in listColor"
                   :to="{ name: 'Test', params: {table: index + 1}}">
        <span class="font-size-jumbo">{{index + 1}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Test from './Test'
  import {listColor} from './../staticColor'
  export default {
    name: 'Home',
    components: {Test},
    computed: {
      listColor () {
        return listColor
      }
    },
    data () {
      return {}
    }
  }
</script>

