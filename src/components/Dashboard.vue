<template>
  <div class="overlay anim-forward very-fast">

    <div class="grid">
      <div class="cell-12">
        <h1 class="margin-50-bottom font-size-big margin-0-top text-center">
          <span>The Dashboard</span>
        </h1>
      </div>
    </div>


    <!-- tables -->
     <!-- <div class="contenu" v-for="(color, i) in listColor">

        <div class="box color-yang shaded-box rounded flex justify-center align-items-center"
             @click="showModal(i)"
             :class="['bg-' + color + '-pronounced', 'hover-bg-' + color]">
          <span class="font-size-jumbo">{{i + 1}}</span>
        </div>


        <modal :classes="'modalStyle v&#45;&#45;modal'" :name="'table-' + i">
          <dashboard-result :table="i + 1"></dashboard-result>
        </modal>


      </div>-->

    <div class="grid justify-center-m">
      <div :key="i"
           :class="[i === 0 || i === 5 ? 'offset-1 offset-0-m' : '', 'bg-' + color + '-pronounced', 'hover-bg-' + color]"
           class="cell-2 cell-3-m cell-4-s cell-6-xs rounded shaded-box text-center cursor-pointer hover-shaded-box padding"
           v-for="(color, i) in listColor" @click="showModal(i)">
        <span class="font-size-jumbo color-yang">{{i + 1}}</span>
        <modal :classes="'modalStyle v--modal'" :name="'table-' + i">
          <dashboard-result :table="i + 1"></dashboard-result>
        </modal>
      </div>
    </div>


  </div>
</template>

<script>
  import { listColor } from '../staticColor'
  import 'animate.css'
  import DashboardResult from './dashboardResult'

  let items = []
  for (let i = 1; i <= 10; i++) {
    items.push({
      id: i
    })
  }
  export default {
    name: 'Dashboard',
    components: {
      DashboardResult
    },
    data () {
      return {
        items,
        selected: undefined
      }
    },
    computed: {
      listColor () {
        return listColor
      }
    },
    methods: {
      showModal (i) {
        this.$modal.show('table-' + i)
      }
    },
  }
</script>

<style>
  .contenu {
    display: inline-block;
  }

  .modalStyle {
    padding: 15px;
  }

  .box {
    width: 200px;
    height: 200px;
    cursor: pointer;
    margin: 10px;
  }
</style>
