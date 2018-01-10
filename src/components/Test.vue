<template>
  <div>
    Quel est le résultat de: {{table}} x {{ multiplicator}}
    <div v-for="response in responses">
      {{response.value}}
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'tables',
    props: {
      table: Number
    },
    data () {
      return {
        turn: 1,
        multiplicator: null,
        responses: []
      }
    },
    methods: {
      setResponses () {
        this.responses.push({value: this.getResult(), isCorrect: true})
        this.responses.push({value: this.getResult() - this.table, isCorrect: false})
        this.responses.push({value: this.getResult() + this.table, isCorrect: false})
        this.responses = _.shuffle(this.responses)
      },
      getResult () {
        return this.table * this.multiplicator
      },
      getNextMultiplicator () {
        return Math.round((Math.random() * Math.floor(9))) + 1
      }
    },
    mounted () {
      this.multiplicator = this.getNextMultiplicator()
      this.setResponses()
    }
  }
</script>

<style scoped>

</style>
