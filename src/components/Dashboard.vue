<template>
  <div>
    <h1>Enfant 1</h1>
    <!-- tables -->
    <div class="grid">
      <div class="contenu" v-for="(color, i) in listColor">
        <div class="box color-yang shaded-box rounded flex justify-center align-items-center"
             @click="selected = i"
             :class="[selected === i ? 'push' : '', 'bg-' + color + '-pronounced', 'hover-bg-' + color]">
          <span class="font-size-jumbo">{{i + 1}}</span>
        </div>
        <transition name="custom-class" enter-active-class="animated bounceInLeft">
          <div v-bind:style="computeMargin(i)" class="tab grid" v-if="selected === i">
            <div class="cell-4 borders-right  ">Content 1</div>
            <div class="cell-4 borders-right ">Content 1</div>
            <div class="cell-4 borders-right ">Content 1</div>
          </div>
        </transition>
      </div>


    </div>
  </div>
</template>

<script>
  import { listColor } from '../staticColor'
  import 'animate.css'
  let items = []
  for (let i = 1; i <= 10; i++) {
    items.push({
      id: i
    })
  }
  export default {
    name: 'Dashboard',
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
      computeMargin (index) {
        return {marginLeft: -210 * (index % 5) - 10 * (index % 5) + 'px'}
      }
    }
  }
</script>

<style>
  .contenu {
    position: relative;
  }

  .push {
    margin-bottom: 310px !important;
  }

  .box {
    width: 200px;
    height: 200px;
    cursor: pointer;
    margin: 10px;
  }

  .tab {
    margin: 0;
    position: absolute;
    background: #eeeeee;
    height: 300px;
    width: 57vw;
    top: 220px;
    border-radius: 10px;
  }

  /* TRANSITION */
  /* always present */
  .expand-enter-active, .expand-leave-active {
    transition: all 0.2s ease-in-out;
  }

  .expand-enter, .expand-leave-to {
    opacity: 0;
  }
</style>
