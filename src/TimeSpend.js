class TimeSpend {
  constructor () {
    this.begin = null
    this.end = null
    this.beginWatch()
  }

  beginWatch () {
    this.begin = new Date()
  }

  endWatch () {
    this.end = new Date()
  }

  diffByMinutes (dt2, dt1) {

    let diff = (dt2.getTime() - dt1.getTime()) / 1000
    diff /= 60
    return Math.abs(Math.round(diff))

  }

  getTimeSpend () {
    if (this.end != null) {
      return this.diffByMinutes(this.begin, this.end)
    } else {
      return null
    }
  }
}

export default TimeSpend
