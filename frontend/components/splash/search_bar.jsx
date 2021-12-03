import React from "react";
import Results from "./results";

export default class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query: "",
      searching: false
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSearching = this.handleSearching.bind(this)
    this.handleStopSearch = this.handleStopSearch.bind(this)
    this.runSearch = this.runSearch.bind(this)
    this.display = this.display.bind(this)
  }

  handleInput(e) {
    this.setState({ query: e.target.value})
    this.runSearch(this.state.query)
  }

  handleSearching(){
    this.setState({searching: true})
  }

  componentWillUnmount(){
    this.props.clearResults()
  }

  handleStopSearch(){
    this.setState({searching: false})
  }

  runSearch(){
    this.props.searchResults(this.state.query)
  }

  display(results, query) {
    let statement = ''
    if (results.length < 1 && query === '') {
      statement = 'Start typing and hit return to populate results'
    } else if (results.length < 1 && query !== '') {
      statement = 'No results'
    } else if (results.length > 1 && query !== '') {
      statement = ''
    }
    if (statement === '_') return (<li id='statement' className='void'>{statement}</li>)
    if (statement !== '') return (<li id='statement' className='text'>{statement}</li>)
  }

  render(){
    return(
      <div id='search-cntr'>
      <div id='search-wrp'>
        <img src="https://hikers-guide.s3.us-west-1.amazonaws.com/icons/search-icon.png" alt="search" id='search-icon' />
        <form onSubmit={this.runSearch}>
          <input 
          onFocus={this.handleSearching}
          onBlur={this.handleStopSearch}
          type="text" 
          id='search-field' 
          placeholder='Search by park or trail name'
          autoComplete='off'
          onChange={e => this.handleInput(e)}
          />
        </form>
          <button id="go-button" onClick={this.runSearch}></button>
          <img onClick={this.runSearch} src="https://hikers-guide.s3.us-west-1.amazonaws.com/icons/arrow.png" alt="go arrow" id='arrow-btn' />
      </div>
        <div id='search-results'>
        <ul id='results-cntr'>
        {this.state.searching === true ?
          this.display(this.props.results, this.state.query)
          : <li></li>}
          <Results results={this.props.results} query={this.state.query} searchResults={this.props.searchResults} />
        </ul>
        </div>
      </div>
    )
  }
}