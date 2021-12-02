import React from "react";
import Results from "./results";

export default class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query: "",
      searching: false,
      loading: false,
      message: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSearching = this.handleSearching.bind(this)
    this.handleStopSearch = this.handleStopSearch.bind(this)
    this.runSearch = this.runSearch.bind(this)
  }

  handleInput() {
    console.log(this.state)
    return e => this.setState({ query: e.target.value, loading: true, message: '' })
  }

  handleSearching(){
    this.setState({searching: true})
    // console.log(this.state)
  }

  handleStopSearch(){
    this.setState({searching: false})
    // console.log(this.state)
  }

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
          onBlur={this.handleStopSearch}
          type="text" 
          id='search-field' 
          placeholder='Search by city, park, or trail name'
          autoComplete='off'
          onChange={this.handleInput()}
          />
        </form>
        <button id="go-button"></button>
        <img src="https://hikers-guide.s3.us-west-1.amazonaws.com/icons/arrow.png" alt="go arrow" id='arrow-btn' />
      </div>
        {this.state.searching === true ?
          <div id='search-results'>
            <p>Start typing to populate results</p>
            {console.log(this.props.results)}
            {/* <Results results={this.props.results} query={this.state.query} /> */}
          </div>
          : null}
      </div>
    )
  }
}