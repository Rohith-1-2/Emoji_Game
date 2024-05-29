import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {cond, obj} = this.props
    const {score, topScore} = obj
    return (
      <nav className="nav-bar">
        <div className="nav-card">
          <img
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1>Emoji Game</h1>
        </div>
        {!cond && (
          <div className="nav-card1">
            <p className="para143">Score: {score}</p>
            <p className="para143">Top Score: {topScore}</p>
          </div>
        )}
      </nav>
    )
  }
}
export default NavBar
