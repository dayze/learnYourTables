class History {

  constructor (table) {
    this.table = table
    this.questions = []
    this.date = new Date()
  }

  addQuestion (question) {
    this.questions.push(question)
  }

  gameEnd () {
    console.log(this)
    window.localStorage.setItem('' + this.date.getTime(), JSON.stringify(this))
  }
}

export default History
