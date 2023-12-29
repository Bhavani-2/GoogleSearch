// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, onPressArrow} = props
  const {suggestion} = details
  const onClickArrow = () => {
    onPressArrow(suggestion)
  }
  return (
    <li className="list">
      <p className="para">{suggestion}</p>
      <button type="button" className="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
