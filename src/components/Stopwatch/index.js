// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isRunning: false, mins: 0, seconds: 0}

  onClickStart = () => {
    const {isRunning} = this.state
    if (isRunning === false) {
      this.setState({isRunning: true})
      this.timerId = setInterval(this.tick, 1000)
    }
  }

  onClickStop = () => {
    this.setState({isRunning: false})
    clearInterval(this.timerId)
  }

  onClickReset = () => {
    clearInterval(this.timerId)
    this.setState({isRunning: false, mins: 0, seconds: 0})
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds < 60) {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    } else {
      this.setState(prevState => ({mins: prevState.mins + 1, seconds: 0}))
    }
  }

  render() {
    const {mins, seconds} = this.state

    return (
      <div className="bg-container">
        <p className="heading">Stopwatch</p>
        <div className="card">
          <h2 className="heading2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            Timer
          </h2>
          <h1 className="time">
            {String(mins).length === 1 ? '0'.concat(mins) : mins}:
            {String(seconds).length === 1 ? '0'.concat(seconds) : seconds}
          </h1>
          <div className="buttons">
            <button onClick={this.onClickStart} type="button" className="btn1">
              Start
            </button>
            <button onClick={this.onClickStop} type="button" className="btn2">
              Stop
            </button>
            <button onClick={this.onClickReset} type="button" className="btn3">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
