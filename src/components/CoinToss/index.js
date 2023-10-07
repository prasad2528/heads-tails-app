import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    resultUrl: headsUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  OnClickToss = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    console.log(toss)
    let tossImage = ''
    let resultHeadsCount = headsCount
    let resultTailsCount = tailsCount
    if (toss === 0) {
      tossImage = headsUrl
      resultHeadsCount += 1
    } else {
      tossImage = tailsUrl
      resultTailsCount += 1
    }
    this.setState({
      resultUrl: tossImage,
      headsCount: resultHeadsCount,
      tailsCount: resultTailsCount,
    })
  }

  render() {
    const {headsCount, tailsCount, resultUrl} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={resultUrl} alt="toss result" />
          <button type="button" className="button" onClick={this.OnClickToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total-count">Total: {totalCount}</p>
            <p className="heads-count">Heads: {headsCount}</p>
            <p className="tails-count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
