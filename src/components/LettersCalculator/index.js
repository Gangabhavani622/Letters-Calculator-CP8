// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {text: ''}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text} = this.state

    return (
      <div className="background-container">
        <div className="sub-container">
          <div className="content-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <label htmlFor="inputId">Enter the phrase</label>
            <input
              type="text"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.onChangeText}
              id="inputId"
            />
            <p className="length-container">No.of letters: {text.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
