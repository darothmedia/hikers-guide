import React from "react";
import { Link } from "react-router-dom";
import { FaMapSigns, FaTree } from "react-icons/fa";

export default class Results extends React.Component {
  constructor(props) {
    super(props)
    this.trailLink = this.trailLink.bind(this)
    this.parkLink = this.parkLink.bind(this)
  }

  // componentDidMount() {
  //   this.props.searchResults(this.props.query)
  // }

  trailLink(result) {
    return(
      <Link to={`/trails/${result.id}`} key={result.id} className={result} id={result.id}>
        <div id='result-icon'><FaMapSigns color='gold' size={30} key={result.id} /> </div>
        <p id='result-name'>{result.name}</p>
      </Link>
    )
  }

  parkLink(result) {
    return (
      <Link to={`/parks/${result.id}`} key={result.id} className={result} id={result.id}>
        <div id='result-icon'><FaMapSigns color='gold' size={30} key={result.id} /> </div>
        <p id='result-name'>{result.name}</p>
      </Link>
    )
  }

  render() {
      const searchResults = this.props.results.map((result, i) => (
      <li id='result-mod' key={i}>
        {result.park_id ? (this.trailLink(result)) : (this.parkLink(result))}
      </li>
    ))

    return (
      <ul id='results-cntr'>
        {searchResults.length < 1 ? (<p>Start typing and hit return to populate results</p>) : (searchResults)}
      </ul>
    )
    
  }
}