class Question {

  constructor (table) {
    this.table = table;
    this.isAlreadyFill = false
    this.multiplicator = null
    this.responses = []
    this.timeSpend = null
  }

  addResponse (response) {
    this.responses.push(response)
  }

}

export default Question
