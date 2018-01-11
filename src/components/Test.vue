<template>
  <div>

    <!-- TODO : SCORE GRID -->
    <!-- <div class="grid">
       <div class="cell-12 shaded-box text-right font-size-medium padding borders-bottom borders-silver">
         <span class="margin-right">Your score</span>
         <ul class="list-unstyled list-inline inline-block color-silver">
           <li v-for="i in 5">
             <span v-show="turn <= i">?</span>
             <span v-if="!goodAnswer" class="color-alizarin">&#10007;</span>
             &lt;!&ndash;<span class="color-emerald">&#10003;</span>&ndash;&gt;
           </li>
         </ul>
       </div>
     </div>-->

    <!-- QUESTION GRID -->
    <div class="grid justify-center">
      <div class="cell-12">
        <h1 class="text-center-m">
          <span class="color-turquoise font-weight-bold margin-right font-size-giant block-s">#{{ turn }}</span>
          <span>What is the result of :</span>
        </h1>
      </div>
      <div class="cell-12 text-center font-size-giant">
        <span class="font-weight-bold color-turquoise">{{table}}</span>
        <span>x </span>
        <span class="font-weight-bold color-turquoise">{{ multiplicator}}</span>
        <span>=</span>
        <span class="color-orange">?</span>
      </div>
    </div>

    <!-- ANSWERS GRID -->
    <div class="grid-column-xs justify-center">
      <div @click="checkAnswer(response)" v-for="response in responses"
           class="cell-2 cell-3-m cell-4-s text-center padding shaded-box font-size-big cursor-pointer hover-color-turquoise">
        {{response.value}}
      </div>
    </div>

    <!-- HELP & NEXT BUTTON GRID -->
    <div class="grid">
      <div class="cell-12">
        <p class="margin-50-top text-center">
          <span class="color-turquoise font-weight-bold">?</span>
          <span class="font-weight-bold">Help</span>
          <span>: You have to click on one of the three answers above.</span>
        </p>
      </div>
      <div class="cell-12 text-center">
        <button @click="getNextQuestion"
                class="button borders-0 bg-emerald color-yang hover-bg-nephritis font-size-medium"
                :disabled="!nextQuestion">
          Next question
        </button>
      </div>
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
        score: 0,
        nextQuestion: false,
        multiplicator: null,
        responses: []
      }
    },
    methods: {
      getNextQuestion () {
        this.turn !== 5 ? this.turn++ : this.turn = 1
        alert(this.turn)
        /* TODO : ??? template method ??? */
        this.nextQuestion = false
      },
      checkAnswer (response) {
        if (!this.nextQuestion) {
          if (response.value === this.getResult) {
            this.score++
          }
          /* TODO : display the good and the bad answer if necessary */
          this.nextQuestion = true
        }
      },
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
    }
    ,
    mounted () {
      this.multiplicator = this.getNextMultiplicator()
      this.setResponses()
    }
  }
</script>

<style scoped>

</style>
