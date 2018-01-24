class Question {

  constructor () {
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
