<template>
  <div>
    <h1>Choisissez</h1>
    <div class="grid">
      <div :class="[index === 0 || index === 5 ? 'offset-1' : '', 'bg-' + color]"
           class="cell-2 cell-4-l cell-6-s shaded-box text-center color-yang" v-for="(color, index) in listColor">
        <span class="font-size-jumbo">{{index + 1}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Table from './Tables'
  import {listColor} from './../staticColor'
  export default {
    name: 'HelloWorld',
    components: {
      Table
    },
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

