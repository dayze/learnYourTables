class History {
  constructor () {
    this.questionsAndAnswers = []
    this.date = new Date()
  }

  addQuestionsAndAnswers (table, multiplicator, {value, isCorrect}) {
    this.questionsAndAnswers.push({table, multiplicator, response: value, isCorrect})
  }
  gameEnd () {
    // push to localstorage
  }
}

export default History
