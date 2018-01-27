class User {

  constructor (name, lastName) {
    this.name = name
    this.lastName = lastName
    this.isCurrent = false
    this.histories = []
  }

  addHistory (history) {
    this.histories.push(history)
  }

  /*gameEnd () {
    window.localStorage.setItem('' + this.date.getTime(), JSON.stringify(this))
  }*/
}

export default User
