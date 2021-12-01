import React from "react";

export default class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {query: ""}
  }

  handleInput(e) {
    e.preventDefault();
    return e => this.setState({ query: e.target.value })
  }

  render(){
    return(
      <div id='search-wrp'>
        <img src="https://hikers-guide.s3.us-west-1.amazonaws.com/icons/search-icon.png" alt="search" id='search-icon' />
        <form>
          <input 
          type="text" 
          id='search-field' 
          placeholder='Search by city, park, or trail name'
          onChange={(e) => this.handleInput(e)}
          />
        </form>
        <button id="go-button"></button>
        <img src="https://hikers-guide.s3.us-west-1.amazonaws.com/icons/arrow.png" alt="go arrow" id='arrow-btn' />
      </div>
    )
  }
}