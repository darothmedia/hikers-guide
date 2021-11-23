import React from "react";
import SearchBar from "./search_bar";

export default class Splash extends React.Component {
  constructor(props){
    super(props)
      this.tagline = ['trail', 'adventure', 'galaxy', 'inspiration', 'planet']
  }

  render(){
    return (
      <div id='splash'>
        <section id='search-spread'>
          <header>
            <h1>Find your next {this.tagline[Math.floor(Math.random() * this.tagline.length)]}</h1>
          </header>
          <SearchBar />
        </section>
        <section id='local-favorites'>
        </section>
      </div>
    )
  }
}