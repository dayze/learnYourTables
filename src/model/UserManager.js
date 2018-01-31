class UserManager {

  constructor () {}

  checkOneUserExists () {
    for (let i = 0, len = localStorage.length; i < len; ++i) {
      if (localStorage.key(i).substring(0, 5) === 'user-') {
        return true
      }
    }
    return false
  }

  changeCurrentUser (user) {
    /* Old current user => isCurrent = false */
    let currentUser = this.getCurrentUser()
    if (currentUser !== null) {
      currentUser.isCurrent = false
      localStorage.setItem(currentUser.key, JSON.stringify(currentUser))
    }
    /* New current user => isCurrent = true*/
    user.isCurrent = true
    localStorage.setItem(user.key, JSON.stringify(user))
  }

  getAllUsers () {
    let users = []
    for (let i = 0, len = localStorage.length; i < len; ++i) {
      if (localStorage.key(i).substring(0, 5) === 'user-') {
        users.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
    return users
  }

  getCurrentUser () {
    for (let i = 0, len = localStorage.length; i < len; ++i) {
      let key = localStorage.key(i)
      if (key.substring(0, 5) === 'user-') {
        let currentUser = JSON.parse(localStorage.getItem(key))
        if (currentUser.isCurrent) {
          return currentUser
        }
      }
    }
    return null
  }

}

export default UserManager
