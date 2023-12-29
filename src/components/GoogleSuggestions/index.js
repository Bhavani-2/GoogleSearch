// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickArrow = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const result = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(result)
    return (
      <div className="main-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google lgo"
          className="image"
        />
        <div className="search-conatiner">
          <div className="icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-image"
            />
            <input
              type="search"
              placeholder="search Google"
              className="input"
              value={searchInput}
              onChange={this.onInput}
            />
          </div>
          <ul className="search">
            {result.map(each => (
              <SuggestionItem
                details={each}
                onPressArrow={this.clickArrow}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
