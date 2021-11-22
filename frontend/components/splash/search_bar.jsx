import React from "react";

export default class SearchBar extends React.Component {
  render(){
    return(
      <div id='search-wrp'>
        <img src="https://hikers-guide.s3.us-west-1.amazonaws.com/icons/search-icon.png" alt="search" id='search-icon' />
        <form>
          <input 
          type="text" 
          id='search-field' 
          placeholder='Search by city, park, or trail name'
          />
        </form>
        <button id="go-button"></button>
        <img src="https://hikers-guide.s3.us-west-1.amazonaws.com/icons/arrow.png" alt="go arrow" id='arrow-btn' />
      </div>
    )
  }
}