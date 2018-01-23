<template>
  <div class="overlay anim-forward very-fast">

    <div class="grid">
      <div class="cell-12">
        <h1 class="margin-50-bottom font-size-giant margin-0-top text-center">The Learning Mode</h1>
        <h2 class="text-center margin-0-top size-medium wide uppercase weight-light">
          Let's revise all tables !</h2>
      </div>
    </div>

    <div class="grid-column-xs justify-center">
      <div v-for="j in 10" v-if="j > 0" class="cell-3 cell-4-m cell-6-s bg-clouds">
        <h2 :class="'bg-'+listColor[j-1]" class="margin-0 color-yang padding">Table {{ j }}</h2>
        <ul class="list-unstyled padding-diffuser">
          <li v-for="i in 10" class="font-size-medium">
            <span class="font-weight-bold">{{j}}</span>
            <span>x </span>
            <span class="font-weight-bold">{{ i}}</span>
            <span>=</span>
            <span class="font-weight-bold color-turquoise">{{ j * i}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>


  import { listColor } from '../../staticColor'

  export default {
    name: 'LearningMode',
    data () {
      return {}
    },
    computed: {
      listColor () {
        return listColor
      }
    }
  }
</script>

