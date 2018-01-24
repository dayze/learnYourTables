class Question {

  constructor () {
    this.isAlreadyFill = false
    this.multiplicator = null
    this.responses = []
    this.timeSpend = null
  }

  addResponse (value, isCorrect) {
    this.responses.push({value, isCorrect})
  }



}

export default Question
