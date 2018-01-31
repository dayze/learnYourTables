class User {

  constructor (name, lastName, isCurrent = false) {
    this.name = name
    this.lastName = lastName
    this.isCurrent = isCurrent
    this.histories = []
    this.date = new Date()
    this.key = 'user-' + this.date.getTime()
  }

  addHistory (history) {
    this.histories.push(history)
  }

  stock () {
    window.localStorage.setItem(this.key, JSON.stringify(this))
  }
}

export default User
