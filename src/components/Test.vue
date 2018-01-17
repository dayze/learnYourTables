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
          <h1 class="text-center-m font-size-medium text-unstyled">
            <span>Question N°</span>
            <span class="color-turquoise">{{ turn }}</span>
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
             class="cell-2 cell-3-m cell-4-s text-center padding shaded-box font-size-big cursor-pointer borders-2 borders-yang"
             :class="[response.selected ? 'bg-turquoise color-yang' : 'hover-borders-turquoise']">
          {{response.value}}
        </div>
      </div>

      <!-- HELP & NEXT BUTTON GRID -->
      <div class="grid">
        <div class="cell-12">
          <p class="margin-50-top text-center">
            <span class="color-turquoise font-weight-bold">?</span>
            <span class="font-weight-bold">Help</span>
            <span>: First you have to click on one of the three answers above and next click on the "next question" button below.</span>
          </p>
        </div>
        <div class="cell-12 text-center">
          <button @click="getNextQuestion"
                  class="button borders-0 bg-belize-hole color-yang hover-bg-peter-river font-size-medium"
                  :disabled="!nextQuestion">
            Next question
          </button>
        </div>
      </div>
    </div>


    <!-- ##### CORRECTION SCORE -->
    <div class="grid text-center overlay anim-backward" v-else>

      <!-- SCORE -->
      <div class="cell-12">
        <h1 class="margin-0-bottom">Your score </h1>
        <span class="font-size-big">{{ score }}/5</span>
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
          <li v-for="data in this.history.questionsAndAnswers" class="font-size-big">

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
          </li>
        </ul>
      </div>


    </div>

  </div>
</template>

<script>
  import shuffle from 'lodash/shuffle'
  import History from '../History'
  import { listColor } from './../staticColor'

  const NB_MAX_TURN = 10
  export default {
    name: 'tables',
    props: {
      table: Number

    },
    data () {
      return {
        turn: 1,
        score: 0,
        showResults: false,
        nextQuestion: false,
        multiplicator: null,
        responses: [],
        history: new History()
      }
    },
    computed: {
      listColor () {
        return listColor
      },
      tableColor () {
        return listColor[this.table - 1]
      }
    },
    methods: {
      play () {
        this.responses = []
        this.multiplicator = this.getNextMultiplicator()
        this.setResponses()
      },
      endPlay () {
        this.history.gameEnd()
        this.$router.go(-1)
      },
      getNextQuestion () {
        if (this.turn < NB_MAX_TURN) {
          this.turn++
          this.nextQuestion = false
          this.play()
        } else {
          this.showResults = true
        }
      },
      checkAnswer (response) {
        this.selectAnswer(response)
        if (!this.nextQuestion) {
          this.history.addQuestionsAndAnswers(this.table, this.multiplicator, response)
          if (response.isCorrect) {
            this.score++
          }
          /* TODO : display the good and the bad answer if necessary */
          this.nextQuestion = true
        }
      },
      setResponses () {
        this.responses.push({value: this.getResult(), isCorrect: true, selected: false})
        this.responses.push({value: this.getResult() - this.table, isCorrect: false, selected: false})
        this.responses.push({value: this.getResult() + this.table, isCorrect: false, selected: false})
        this.responses = shuffle(this.responses)
      },
      selectAnswer (response) {
        for (let response of this.responses) {
          response.selected = false
        }
        response.selected = true
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
      this.play()
      /*  this.showResults = true
        this.history.addQuestionsAndAnswers(this.table, 6, {value: 42, isCorrect: false, selected: false})
        this.history.addQuestionsAndAnswers(this.table, 2, {value: 42, isCorrect: true, selected: false})
        this.history.addQuestionsAndAnswers(this.table, 4, {value: 42, isCorrect: false, selected: false})
        this.history.addQuestionsAndAnswers(this.table, 10, {value: 42, isCorrect: true, selected: false})
        this.history.addQuestionsAndAnswers(this.table, 8, {value: 42, isCorrect: true, selected: false})*/
    }
  }
</script>

<style scoped>

</style>
