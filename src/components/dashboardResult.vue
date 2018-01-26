<template>
  <div>
    <h2 class="text-center">Result of table {{table}}</h2>
    <div class="grid">
      <div class="cell-3 text-center" v-for="(item, index) in data">
        <div class="padding-5-bottom">{{table}} x {{index + 1}}</div>
        <span class="color-green-sea">{{item.nbCorrect}} <img src="../assets/img/happy.png" class="icon"></span>
        <span class="color-alizarin">{{item.nbFalse}} <img src="../assets/img/sad-smiley.png" class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard-result',
    props: {table: Number},
    data () {
      return {
        storageData: [],
        data: []
      }
    },
    methods: {
      setDataFromLocalStorage () {
        for (let i = 0, len = localStorage.length; i < len; ++i) {
          let onlyNumber = /^[0-9]+$/
          if (onlyNumber.test(localStorage.key(i))) {
            this.storageData.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
          }
        }
      },
      makeResult () {
        for (let i = 0; i < 10; i++) {
          this.data.push({nbCorrect: 0, nbFalse: 0})
        }
        for (let data of this.storageData) {
          for (let question of data.questions) {
            if (question.table === this.table) {
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
      },
      colorByRatio (item) {
        if (item.nbCorrect < item.nbFalse) {
          return 'color-alizarin'
        } else if (item.nbCorrect > item.nbFalse) {
          return 'color-green-sea'
        }
      }
    },
    mounted () {
      this.setDataFromLocalStorage()
      this.makeResult()
    }
  }
</script>

<style scoped>
  .icon {
    max-width: 20px;
  }
</style>
