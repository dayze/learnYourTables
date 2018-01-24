<template>
  <div class="overlay anim-backward fast">
    <!-- ##### TABLE TITLE -->
    <div class="grid">
      <div class="cell-12">
        <h1 :class="'borders-'+tableColor"
            class="font-size-big font-size-normal-s bg-clouds padding borders-5-left margin-0 text-unstyled text-wide">
          <span>Table </span><span :class="'coldor-'+tableColor">{{ table }}</span></h1>
      </div>
    </div>

    <!-- ##### QUESTION TEST -->
    <div v-if="!showResults">
      <div class="grid justify-center">
        <div class="cell-12">
          <h1 class="text-center-m font-size-medium text-unstyled margin-0-bottom">
            <span v-if="!startTimer" class="overlay inline-block anim-forward very-fast">
            <span>Question N°</span>
            <span class="color-turquoise">{{ turn }}</span>
            </span>
            <timer class="inline-block overlay anim-backward very-fast" v-on:timerOver="getNextQuestion" :time="5"
                   :start="startTimer">
              Next question in
            </timer>
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
      <div class="grid justify-center-m">

        <div @click="checkAnswer(response)" v-for="(response, index) in responses"
             class="cell-2 cell-3-m cell-4-s cell-6-xs text-center padding shaded-box font-size-big cursor-pointer borders-2 borders-yang"
             :class="[index === 0 || index === 5 ? 'offset-1 offset-0-m' : '', responseColorBgColor(response)]">
          {{response.value}}
        </div>
      </div>


    </div>


    <!-- ##### CORRECTION SCORE -->
    <div class="grid text-center overlay anim-backward very-fast" v-else>

      <!-- SCORE -->
      <div class="cell-12">
        <h1 class="margin-0-bottom">Your score </h1>
        <span class="font-size-big">{{ score }} / {{ nbMaxTurn }}</span>
      </div>

      <!-- END BUTTONS -->
      <div class="cell-12">
        <a @click.prevent="endPlay"
           class="button block-s borders-0 bg-belize-hole hover-bg-peter-river color-yang margin-bottom-s"
           title="To the homepage">
          Choose an other one table
        </a>
        <router-link :to="{ name: 'Test', params: {table: table}}"
                     class="button borders-0 bg-carrot hover-bg-orange color-yang block-s"
                     :title="'Retry with the table '+ table">
          <span>Retry</span>
        </router-link>
        <!--  <a @click.prevent="retry"
             class="button block-s borders-0 bg-belize-hole hover-bg-peter-river color-yang margin-bottom-s"
             :title="'Retry with the table'+table">
            Retry
          </a>-->
        <router-view :key="$route.fullPath"></router-view>
      </div>

      <!-- CORRECTION -->
      <div class="cell-12">
        <ul class="list-unstyled font-size-normal padding-diffuser">
          <!-- <li v-for="data in this.groupByMultiplicator" class="font-size-big">
             <span v-if="!data.isCorrect" class="color-alizarin">&#10007;</span>
             <span v-else class="color-emerald">&#10003;</span>

             <span class="font-weight-bold color-turquoise">{{data.table}}</span>
             <span>x </span>
             <span class="font-weight-bold color-turquoise">{{ data.multiplicator}}</span>
             <span>=</span>
             <span
               :class="[data.isCorrect ? 'color-emerald' : 'color-alizarin text-line-through']">{{data.response}}</span>
             <span class="font-size-normal" v-if="!data.isCorrect">
                 The answer was <span class="font-weight-bold">{{ table * data.multiplicator }}</span>
               </span>
           </li>-->
          <li v-for="question in this.history.questions" class="font-size-big">
            {{ question.multiplicator }}
          </li>
        </ul>
      </div>


    </div>

  </div>
</template>

<script>
  import shuffle from 'lodash/shuffle'
  import groupBy from 'lodash/groupBy'
  import History from '../History'
  import Question from '../Question'
  import Ts from '../TimeSpend'
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
        nbMaxTurn: 2, // set to 2 for test purposes
        turn: 1,
        score: 0,
        showResults: false,
        multiplicator: null,
        responses: [],
        history: new History(this.table),
        question: new Question(),
        timesSpend: [],
        timeSpend: null,
        startTimer: false,
        availableMultiplicators: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    computed: {
      tableColor () {
        return listColor[this.table - 1]
      }
    },
    methods: {
      play () {
        this.question = new Question()
        this.timeSpend = new Ts()
        this.timesSpend.push(this.timeSpend)
        this.responses = []
        this.multiplicator = this.getNextMultiplicator()
        this.setResponses()
      },
      endPlay () {
        this.$router.go(-1)
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
          }
          // TODO : change history constrcutor
          //this.history.addQuestionsAndAnswers(this.table, this.multiplicator, response, this.timeSpend.getTimeSpend())

          this.question.addResponse(response)
          if (!this.question.isAlreadyFill) {
            this.question.multiplicator = this.multiplicator
            this.question.timeSpend = this.timeSpend.getTimeSpend()
            this.question.isAlreadyFill = true
            this.history.addQuestion(this.question)
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
          return this.table * this.multiplicator
        }
        return this.table * pMultiplicator
      },
      getNextMultiplicator () {
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
      this.play()
      /* @@@@@@ DUMP FEATURES @@@@@@ */

      /* for (let i = 1; i <= 10; i++) {
         let question = new Question()
         question.addResponse(this.getResult(i), false)
         question.addResponse(this.getResult(i), false)
         question.addResponse(this.getResult(i), true)
         question.multiplicator = this.multiplicator
         question.timeSpend = this.timeSpend.getTimeSpend()
         question.alreadyFill = true
         this.history.addQuestion(question)
       }
       console.log(this.history.questions)*/
      /* @@@@@@ END DUMP FEATURES @@@@@@ */
    }
  }
</script>

<style scoped>

</style>
