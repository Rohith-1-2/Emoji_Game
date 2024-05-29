/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    emoList: this.props.emojisList,
    memoryList: [],
    condition: false,
    winOrLoseProp: {
      imgUrl: '',
      title: '',
      scoreText: '',
      score: '',
    },
    navBarProp: {
      score: 0,
      topScore: 0,
    },
  }
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }
  playingAgain = () => {
    const {winOrLoseProp, navBarProp} = this.state
    let b = navBarProp.topScore
    if (winOrLoseProp.score > navBarProp.topScore) {
      b = winOrLoseProp.score
    }
    this.setState({
      condition: false,
      navBarProp: {
        score: 0,
        topScore: b,
      },
    })
  }
  emoteClicking = a => {
    this.setState(prevState => {
      if (prevState.memoryList.includes(a)) {
        return {
          memoryList: [],
          emoList: this.props.emojisList,
          condition: true,
          winOrLoseProp: {
            imgUrl:
              'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
            title: 'Lose',
            scoreText: 'Score',
            score: prevState.memoryList.length,
          },
        }
      } else {
        if (prevState.memoryList.length === 11) {
          return {
            memoryList: [],
            emoList: this.props.emojisList,
            condition: true,
            winOrLoseProp: {
              imgUrl:
                'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
              title: 'Won',
              scoreText: 'Best Score',
              score: 12,
            },
          }
        } else {
          return {
            memoryList: [...prevState.memoryList, a],
            emoList: this.shuffledEmojisList(),
            condition: false,
            navBarProp: {
              ...prevState.navBarProp,
              score: prevState.memoryList.length + 1,
            },
          }
        }
      }
    })
  }
  render() {
    const {emoList, condition, winOrLoseProp, navBarProp} = this.state
    let emote
    if (condition) {
      emote = <WinOrLoseCard passing={this.playingAgain} obj={winOrLoseProp} />
    } else {
      emote = (
        <ul className="unCard">
          {emoList.map(item => (
            <EmojiCard cant={this.emoteClicking} key={item.id} obj={item} />
          ))}
        </ul>
      )
    }
    return (
      <div className="bg-container">
        <NavBar obj={navBarProp} cond={condition} />
        <div className="card">{emote}</div>
      </div>
    )
  }
}
export default EmojiGame
