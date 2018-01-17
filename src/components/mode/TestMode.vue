<template>
  <div class="anim-forward overlay very-fast">

    <div class="grid">
      <div class="cell-12">
        <h1 class="font-size-giant margin-0-top text-center">The Test Mode</h1>
      </div>
    </div>

    <div class="grid-column-reverse-s">
      <div class="cell-12-no-gutters">
        <!-- Welcome note -->

        <div class="grid justify-center">
          <div class="cell-10">
            <p class="text-center-m font-size-medium">What is it ?</p>
            <p>
              Here you can learn tables very easily. Choose one of the tables for which you want to train, and try to answer to 5 questions about this table.
            </p>
          </div>
        </div>
      </div>
      <div class="cell-12-no-gutters margin-30-bottom">
        <!-- tables -->
        <div class="grid justify-center-m">
          <div class="cell-12">
            <p class="text-center font-size-medium">Which table do you want to learn ?</p>
          </div>
          <router-link :key="index"
                       :class="[index === 0 || index === 5 ? 'offset-1 offset-0-m' : '', 'bg-' + color + '-pronounced', 'hover-bg-' + color]"
                       class="cell-2 cell-3-m cell-4-s cell-6-xs shaded-box text-center color-yang cursor-pointer hover-shaded-box padding"
                       v-for="(color, index) in listColor"
                       :to="{ name: 'Test', params: {table: index + 1}}">
            <span class="font-size-jumbo">{{index + 1}}</span>
          </router-link>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import Test from '../Test'
  import { listColor } from '../../staticColor'

  export default {
    name: 'TestMode',
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

