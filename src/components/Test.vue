<template>
  <div>
    {{table}}
  </div>
</template>

<script>
  export default {
    name: 'tables',
    props: {
      table: Number
    },
    data () {
      return {
        turn: 1,
        multiplicator: Math.round((Math.random() * Math.floor(10)))
      }
    },
    methods: {
      getResult () {
        return this.table * (Math.random() * Math.floor(10))
      },
      getNextQuestion () {

      }
    },
    mounted: function () {
      /*   this.$nextTick(function () {
           // Code that will run only after the
           // entire view has been rendered
         })*/
      console.log(this.multiplicator)
    }
  }
</script>

<style scoped>

</style>
