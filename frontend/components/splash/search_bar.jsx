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
    // this.handleStopSearch = this.handleStopSearch.bind(this)
    this.runSearch = this.runSearch.bind(this)
  }

  handleInput() {
    return e => this.setState({ query: e.target.value})
  }

  handleSearching(){
    this.setState({searching: true})
  }

  componentWillUnmount(){
    this.props.clearResults()
  }

  // handleStopSearch(){
  //   this.setState({searching: false})
  // }

  runSearch(){
    this.props.searchResults(this.state.query)
  }

  render(){
    return(
      <div id='search-cntr'>
      <div id='search-wrp'>
        <img src="https://hikers-guide.s3.us-west-1.amazonaws.com/icons/search-icon.png" alt="search" id='search-icon' />
        <form onSubmit={this.runSearch}>
          <input 
          onFocus={this.handleSearching}
          // onBlur={this.handleStopSearch}
          type="text" 
          id='search-field' 
          placeholder='Search by city, park, or trail name'
          autoComplete='off'
          onChange={this.handleInput()}
          />
        </form>
          <button id="go-button" onClick={() => this.runSearch}></button>
          <img src="https://hikers-guide.s3.us-west-1.amazonaws.com/icons/arrow.png" alt="go arrow" id='arrow-btn' />
      </div>
        {this.state.searching === true ?
          <div id='search-results'>
            <Results results={this.props.results} query={this.state.query} searchResults={this.props.searchResults} />
          </div>
          : null}
      </div>
    )
  }
}