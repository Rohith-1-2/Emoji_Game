import './index.css'
import {Component} from 'react'

class WinOrLoseCard extends Component {
  render() {
    const {obj, passing} = this.props
    const {imgUrl, title, scoreText, score} = obj
    return (
      <div className="winCard">
        <div className="win-card">
          <h1 className="heading12">You {title}</h1>
          <p className="winpara">{scoreText}</p>
          <p className="para">{score}/12</p>
          <button onClick={passing} className="button12">
            Play Again
          </button>
        </div>
        <img alt="win or lose" className="image12" src={imgUrl} />
      </div>
    )
  }
}
export default WinOrLoseCard
