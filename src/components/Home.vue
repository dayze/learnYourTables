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
      <div
        :class="[index === 0 || index === 5 ? 'offset-1 offset-0-m' : '', 'bg-' + color + '-pronounced', 'hover-bg-' + color]"
        class="cell-2 cell-3-m cell-4-s cell-6-xs shaded-box text-center color-yang cursor-pointer hover-shaded-box padding"
        v-for="(color, index) in listColor">
        <span class="font-size-jumbo">{{index + 1}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Table from './Tables'
  import { listColor } from './../staticColor'

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

