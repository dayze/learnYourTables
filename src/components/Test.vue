<template>
  <div class="overlay anim-forward very-fast">


    <div class="grid">
      <div class="cell-12">
        <h1 class="margin-0 size-big margin-0-top borders-bottom borders-silver">
        <span v-if="evaluationMode">The Evaluation Mode</span>
        <span v-if="!evaluationMode">The Test Mode</span>
      </h1>
      </div>
    </div>

    <!-- ##### QUESTION TEST -->
    <div v-if="!showResults">

      <!-- ##### TABLE TITLE -->
      <div class="grid">
        <div class="cell-12">
          <h1 :class="'bg-'+tableColor"
              class="font-size-big size-normal-s padding margin-0 text-unstyled wide color-yang">
            <span>Table {{ currentTable }}</span>
          </h1>
        </div>
      </div>

      <!-- ##### QUESTION -->
      <div class="grid justify-center">
        <div class="cell-12">
          <h1 class="text-center-m font-size-medium text-unstyled margin-0-bottom">
            <span v-if="!startTimer" class="overlay inline-block anim-forward very-fast">
            <span>Question</span>
            <span class="font-weight-bold">#{{ turn }}</span>
            </span>
            <span v-if="startTimer" class="block overlay anim-backward very-fast">

              <span class="color-sun-flower">!</span>
              <span>Next question in </span>
                  <timer v-on:timerOver="getNextQuestion" class="inline-block"
                         :time="2"
                         :start="startTimer">
            </timer>
              <span>seconds</span>
            </span>
          </h1>
        </div>
        <div class="cell-12 text-center font-size-giant">
          <span class="font-weight-bold" :class="'color-'+tableColor">{{ currentTable }}</span>
          <span>x </span>
          <span class="font-weight-bold">{{ multiplicator}}</span>
          <span>=</span>
          <span class="color-orange">?</span>
        </div>
      </div>

      <!-- ANSWERS GRID -->
      <div class="grid justify-center-m">

        <div @click="checkAnswer(response)" v-for="(response, index) in responses"
             class="cell-2 cell-3-m cell-4-s cell-6-xs text-center padding shaded-box font-size-big cursor-pointer borders-2 borders-yang"
             :class="[index === 0 || index === 5 ? 'offset-1 offset-0-m' : '', responseColorBgColor(response)]">
          {{response.value}}
        </div>
      </div>


    </div>


    <!-- ##### CORRECTION SCORE -->
    <div class="grid overlay anim-backward very-fast text-center" v-else>

      <!-- SCORE -->
      <div class="cell-12 text-center">
        <h1 class="margin-0-bottom">Résultats</h1>
        <span class="font-size-medium">Total of {{history.getTotalErrors()}} error(s)</span>
      </div>

      <!-- END BUTTONS -->
      <div v-if="!evaluationMode" class="cell-12">
        <a @click.prevent="endPlay"
           class="button block-s borders-0 bg-belize-hole hover-bg-peter-river color-yang margin-bottom-s"
           title="Select an other one table">
          Choose an other one table
        </a>
      </div>

      <!-- CORRECTION -->
      <div class="cell-12">
        <!-- <ul model="list-unstyled font-size-normal padding-diffuser">
           <li v-for="(question, index) in this.history.questions">
             <h2 model="margin-0-bottom">Question N° {{index}}</h2>
             <ul model="list-unstyled padding">
               <li>
                 <span model="font-weight-bold">Spend time :</span>
                 <span>{{ question.timeSpend }} seconds</span>
               </li>
               <li>
                 You made {{question.responses.length - 1 }} error(s)
               </li>
               <li v-for="response in question.responses">
                 <span v-if="!response.isCorrect" model="color-alizarin">&#10007;</span>
                 <span v-else model="color-emerald">&#10003;</span>

                 <span model="font-weight-bold color-turquoise">{{ question.table }}</span>
                 <span>x </span>
                 <span model="font-weight-bold color-turquoise">{{ question.multiplicator}}</span>
                 <span>=</span>
                 <span
                   :model="[response.isCorrect ? 'color-emerald' : 'color-alizarin text-line-through']">{{response.value}}</span>
               </li>
             </ul>
           </li>
         </ul>-->

        <div class="grid justify-center">

          <div class="cell-3 borders borders-silver rounded" v-for="(question, index) in this.history.questions">
            <h2 class="margin-0 padding-10 bg-clouds">Question N° {{index + 1}}</h2>
            <ul class="list-unstyled padding">
              <li>
                <span class="font-weight-bold">Spend time :</span>
                <span>{{ question.timeSpend }} seconds</span>
              </li>
              <li>
                You made {{question.responses.length - 1 }} error(s)
              </li>
              <li v-for="response in question.responses">
                <span v-if="!response.isCorrect" class="color-alizarin">&#10007;</span>
                <span v-else class="color-emerald">&#10003;</span>

                <span class="font-weight-bold color-turquoise">{{ question.table }}</span>
                <span>x </span>
                <span class="font-weight-bold color-turquoise">{{ question.multiplicator}}</span>
                <span>=</span>
                <span
                  :class="[response.isCorrect ? 'color-emerald' : 'color-alizarin text-line-through']">{{response.value}}</span>
              </li>
            </ul>
          </div>

        </div>


      </div>


    </div>

  </div>
</template>

<script>
  import shuffle from 'lodash/shuffle'
  import History from '../model/History'
  import Question from '../model/Question'
  import Ts from '../model/TimeSpend'
  import { listColor } from './../staticColor'
  import Timer from './timer/Timer'

  export default {
    name: 'tables',
    props: {
      table: Number
    },
    components: {Timer},
    data () {
      return {
        currentTable: this.table,
        evaluationMode: false,
        nbMaxTurn: 2, // set to 2 for test purposes
        turn: 1,
        score: 0,
        showResults: false,
        multiplicator: null,
        responses: [],
        history: new History(),
        currentQuestion: new Question(this.currentTable),
        timesSpend: [],
        timeSpend: null,
        startTimer: false,
        availableMultiplicators: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    computed: {
      tableColor () {
        return listColor[this.currentTable - 1]
      }
    },
    methods: {
      play () {
        if (this.evaluationMode) {
          this.currentTable = this.getRandomTable()
        }
        this.currentQuestion = new Question(this.currentTable)
        this.timeSpend = new Ts()
        this.timesSpend.push(this.timeSpend)
        this.responses = []
        this.multiplicator = this.getNextMultiplicator()
        this.setResponses()
      },
      getRandomTable () {
        return Math.floor(Math.random() * 10) + 1
      },
      endPlay () {
        this.$router.go(-1)
      },
      getCurrentUser(){

      },
      getNextQuestion () {
        if (this.turn < this.nbMaxTurn) {
          this.turn++
          this.startTimer = false
          this.play()
        } else {
          this.showResults = true
          this.history.gameEnd()
        }
      },
      checkAnswer (response) {
        if (!this.startTimer) {
          response.selected = true
          if (response.isCorrect) {
            this.timeSpend.endWatch()
            this.score++
            this.startTimer = true
            this.currentQuestion.timeSpend = this.timeSpend.getTimeSpend()
          }
          this.currentQuestion.addResponse(response)
          if (!this.currentQuestion.isAlreadyFill) {
            this.currentQuestion.multiplicator = this.multiplicator
            this.currentQuestion.isAlreadyFill = true
            this.history.addQuestion(this.currentQuestion)
          }
        }
      },
      setResponses () {
        for (let i = 1; i <= 10; i++) {
          let isCorrect = this.getResult() === this.getResult(i)
          this.responses.push({value: this.getResult(i), isCorrect: isCorrect, selected: false})
        }
        this.responses = shuffle(this.responses)
      },
      getResult (pMultiplicator = null) {
        if (pMultiplicator === null) {
          return this.currentTable * this.multiplicator
        }
        return this.currentTable * pMultiplicator
      },
      getNextMultiplicator () {
        if (this.evaluationMode) {
          return Math.floor(Math.random() * 10) + 1
        }
        let randomPick = Math.floor(Math.random() * this.availableMultiplicators.length)
        let multiplicator = this.availableMultiplicators[randomPick]
        this.availableMultiplicators.splice(randomPick, 1)
        return multiplicator
      },
      responseColorBgColor (response) {
        if (response.selected) {
          if (response.isCorrect) {
            return 'bg-emerald color-yang'
          } else {
            return 'bg-alizarin color-yang'
          }
        }
      }
    },
    mounted () {
      if (this.table === -1) {
        this.evaluationMode = true
      }
      this.play()
    }
  }
</script>

<style scoped>

</style>
