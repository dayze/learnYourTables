class History {
  constructor () {
    this.questionsAndAnswers = []
    this.date = new Date()
  }

  addQuestionsAndAnswers (table, multiplicator, {value, isCorrect}, timeSpend) {
    this.questionsAndAnswers.push({table, multiplicator, response: value, isCorrect}, timeSpend)
  }
  gameEnd () {
    window.localStorage.setItem('' + this.date.getTime(), JSON.stringify(this))
  }
}

export default History
