import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  trap = () => {
    const {cant, obj} = this.props
    cant(obj.id)
  }
  render() {
    const {obj} = this.props
    const {emojiUrl, emojiName} = obj
    return (
      <li onClick={this.trap} className="EmoCard">
        <button className="but123">
          <img className="picture" alt={emojiName} src={emojiUrl} />
        </button>
      </li>
    )
  }
}
export default EmojiCard
