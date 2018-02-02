<template>
  <div class="overlay anim-forward very-fast">

    <div class="grid">
      <div class="cell-12">
        <h1 class="margin-50-bottom font-size-big margin-0-top text-center">
          <span>Statistics</span>
        </h1>
      </div>
    </div>

    <!-- CHOICES -->
    <div class="grid justify-center justify-start-s">
      <div v-for="(color,i) in listColor"
           class="cell-1-no-gutters cell-2-no-gutters-s shaded-box text-center cursor-pointer hover-shaded-box padding"
           :class="[i === 0 || i === 5 ? 'offset-1-no-gutters-s' : '', 'bg-' + color + '-pronounced', 'hover-bg-' + color]"
           @click="setChosenTable(i+1)"
           :title="'See my stats for the table '+(i+1)">
        <span class="color-yang">{{i + 1}}</span>
      </div>
    </div>

    <!-- RESULTS  -->
    <div class="grid">

      <!-- chosen table = null -->
      <div v-if="!chosenTable" class="cell-12">
        <p class="text-center size-medium weight-light font-italic color-asbestos">
          Please select a table to see your statistics</p>
      </div>

      <!-- results -->
      <div class="cell-12 table-responsive margin-50-top" v-else>


        <!-- title -->
        <h1 :class="'bg-'+tableColor"
            class="font-size-big size-normal-s padding margin-0 text-unstyled wide color-yang">
          <span>Table {{ chosenTable }}</span>
        </h1>

        <table class="table-template width-100 equal-columns striped-odd text-center">
          <thead>
          <tr class="padding-10-diffuser">
            <th>Question</th>
            <th>
              <img src="../assets/img/happy.png" class="icon">
            </th>
            <th>
              <img src="../assets/img/sad-smiley.png" class="icon">
            </th>
            <th>
              <img src="../assets/img/percent.png" class="icon" alt="">
            </th>
          </tr>
          </thead>
          <tbody>


          <tr v-for="(item, index) in data">
            <td>
              <span :class="'color-'+tableColor">{{chosenTable}}</span>
              <span>x</span>
              <span class="font-weight-bold">{{index + 1}}</span>
            </td>
            <td :class="item.nbCorrect > 0 ? 'color-emerald font-weight-bold': ''">{{item.nbCorrect}}</td>
            <td :class="item.nbFalse > 0 ? 'color-alizarin font-weight-bold': ''">{{item.nbFalse}}</td>
            <td class="font-weight-bold">{{percentageResponses(item.nbCorrect, item.nbFalse)}}</td>
          </tr>


          </tbody>
        </table>

      </div>

    </div>

  </div>
</template>

<script>
  import { listColor } from '../staticColor'
  import UserManager from '../model/UserManager'

  export default {
    name: 'Dashboard',
    data () {
      return {
        chosenTable: null,
        storageData: [],
        data: []
      }
    },
    computed: {
      listColor () {
        return listColor
      },
      tableColor () {
        return listColor[this.chosenTable - 1]
      }
    },
    methods: {
      percentageResponses (nbCorrect, nbFalse) {
        if (nbCorrect === 0 && nbFalse === 0) {
          return 'Not done yet'
        } else if (nbFalse === 0) {
          return '100%'
        } else if (nbCorrect === 0) {
          return '0%'
        } else {
          return Math.round((nbCorrect / (nbCorrect + nbFalse)) * 100 )+ '%'
        }
      },
      setChosenTable (table) {
        this.chosenTable = table
        this.makeResult()
      },
      setDataFromLocalStorage () {
        let currentUser = new UserManager().getCurrentUser()
        for (let history of currentUser.histories) {
          this.storageData.push(history)
        }
      },
      makeResult () {
        this.data = []
        for (let i = 0; i < 10; i++) {
          this.data.push({nbCorrect: 0, nbFalse: 0})
        }
        for (let data of this.storageData) {
          for (let question of data.questions) {
            if (question.table === this.chosenTable) {
              for (let response of question.responses) {
                if (response.isCorrect) {
                  let newNbCorrect = this.data[question.multiplicator - 1].nbCorrect + 1
                  this.data.splice(question.multiplicator - 1, 1, {
                    nbCorrect: newNbCorrect,
                    nbFalse: this.data[question.multiplicator - 1].nbFalse
                  })
                } else {
                  let newNbFalse = this.data[question.multiplicator - 1].nbFalse + 1
                  this.data.splice(question.multiplicator - 1, 1, {
                    nbCorrect: this.data[question.multiplicator - 1].nbCorrect,
                    nbFalse: newNbFalse
                  })
                }
              }
            }
          }
        }
      }
    },
    mounted () {
      this.setDataFromLocalStorage()
    }
  }
</script>


<style scoped>
  .icon {
    max-width: 30px;
  }
</style>
