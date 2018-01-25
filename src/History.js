class History {

  constructor () {
    this.questions = []
    this.date = new Date()
  }

  addQuestion (question) {
    this.questions.push(question)
  }

  gameEnd () {
    window.localStorage.setItem('' + this.date.getTime(), JSON.stringify(this))
  }

  getTotalErrors () {
    let errors = 0
    for (let i = 0; i < this.questions.length; i++) {
      for (let j = 0; j < this.questions[i].responses.length; j++) {
        if (!this.questions[i].responses[j].isCorrect) {
          errors++
        }
      }
    }
    return errors
  }
}

export default History
