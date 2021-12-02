import React from "react";
import SearchBarContainer from "./search_bar_container";
import TrailLineupContainer from '../trails/trail_lineup_container'

export default class Splash extends React.Component {
  constructor(props){
    super(props)
      this.tagline = this.tagline.bind(this)
  }

  tagline(){
      let tags = ['trail', 'adventure', 'inspiration', 'path', 'planet']
      return (tags[Math.floor(Math.random() * tags.length)])
  }

  render(){
    return (
      <div id='bg'>
        <section id='search-spread'>
          <header>
            <h1>Find your next {this.tagline()}</h1>
          </header>
          <SearchBarContainer />
        </section>
        <section id='local-favorites'>
          <div id='fav-header'>
            <h2>Local favorites near </h2><p>Earth</p>
          </div>
          <TrailLineupContainer />
        </section>
      </div>
    )
  }
}