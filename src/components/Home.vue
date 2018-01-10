<template>
  <div>
    <h1>Choisissez</h1>
    <div class="grid">
      <router-link :key="index" :class="[index === 0 || index === 5 ? 'offset-1' : '', 'bg-' + color]"
                   class="cell-2 cell-4-l cell-6-s shaded-box text-center color-yang" v-for="(color, index) in listColor"
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

