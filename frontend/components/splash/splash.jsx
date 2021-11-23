import React from "react";
import SearchBar from "./search_bar";

export default class Splash extends React.Component {
  constructor(props){
    super(props)
      this.tagline = this.tagline.bind(this)
  }

  tagline(){
    // if (localStorage.theme === 'trail') {return ('planet')}
    // else {
      let tags = ['trail', 'adventure', 'inspiration', 'path', 'planet']
      return (tags[Math.floor(Math.random() * tags.length)])
    // }
  }

  render(){
    return (
      <div id='splash'>
        <section id='search-spread'>
          <header>
            <h1>Find your next {this.tagline()}</h1>
          </header>
          <SearchBar />
        </section>
        <section id='local-favorites'>
        </section>
      </div>
    )
  }
}