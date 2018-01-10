<template>
  <div>
    <h1>Choisissez</h1>
    <div class="grid container justify-center">
      <div
        class="cell-2 cell-4-l cell-6-s text-center bg-peter-river color-yang cursor-pointer hover-bg-turquoise transition-2"
        v-for="i in 10">
        <span class="font-size-jumbo">{{i}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Table from './Tables'

  export default {
    name: 'HelloWorld',
    components: {
      Table
    },
    data () {
      return {}
    }
  }
</script>

