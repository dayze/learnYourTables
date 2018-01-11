class History {
  constructor () {
    this.questionsAndAnswers = []
    this.date = new Date()
  }

  addQuestionsAndAnswers (table, multiplicator, {isCorrect}) {
    this.questionsAndAnswers.push({table, multiplicator, isCorrect})
  }
  gameEnd () {
    // push to localstorage
  }
}

export default History
