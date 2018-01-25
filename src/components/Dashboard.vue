<template>
  <div>
    <h1>Enfant 1</h1>
    <!-- tables -->
    <div class="contenu" v-for="(color, i) in listColor">
      <div class="box color-yang shaded-box rounded flex justify-center align-items-center"
           @click="showModal(i)"
           :class="['bg-' + color + '-pronounced', 'hover-bg-' + color]">
        <span class="font-size-jumbo">{{i + 1}}</span>
      </div>
      <modal :classes="'modalStyle v--modal'" :adaptive="true" :name="'table-' + i">
        <dashboard-result :table="i + 1"></dashboard-result>
      </modal>
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
      showModal(i) {
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
