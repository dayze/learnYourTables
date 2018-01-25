<template>
  <div class="anim-forward overlay very-fast">

    <div class="grid-column-reverse-s">
      <div class="cell-12-no-gutters">
        <!-- Welcome note -->

        <div class="grid justify-center">
          <div class="cell-10">
            <p class="text-center-m font-size-medium">What is it ?</p>
            <p>
              Here you can learn tables very easily. Choose one of the tables for which you want to train, and try to
              answer to 5 questions about this table.
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


  import { listColor } from '../../staticColor'
  import { TEST_TYPE_EVALUATION, TEST_TYPE_LEARNING } from './../../const'
  import Test from '../Test.vue'

  export default {
    name: 'Choices',
    components: {Test},
    props: {testType: {String}},
    computed: {
      listColor () {
        return listColor
      }
    },
    data () {
      return {}
    },
    mounted () {
      if (this.testType === TEST_TYPE_EVALUATION) {
        // todo make random table
        this.$router.push({name: 'Test', params: {table: -1}})
      }
    }
  }
</script>

