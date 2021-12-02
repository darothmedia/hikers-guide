import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaTree } from "react-icons/fa";

export default class Results extends React.Component {
  constructor(props) {
    super(props)
    this.trailLink = this.trailLink.bind(this)
    this.parkLink = this.parkLink.bind(this)
    this.display = this.display.bind(this)
  }

  // componentDidMount() {
  //   this.props.searchResults(this.props.query)
  // }

  trailLink(result) {
    return(
      <Link to={`/trails/${result.id}`} key={result.id} className={result} id={result.id}>
        <div id='result-icon'><FaMapMarkerAlt color='#629730' size={30} key={result.id} /> </div>
        <p id='result-name'>{result.name}</p>
      </Link>
    )
  }

  parkLink(result) {
    return (
      <Link to={`/parks/${result.id}`} key={result.id} className={result} id={result.id}>
        <div id='result-icon'><FaTree color='#629730' size={30} key={result.id} /> </div>
        <p id='result-name'>{result.name}</p>
      </Link>
    )
  }

  display(results, query){
    let statement = ''
    if (results.length < 1 && query === '') {
      statement = 'Start typing and hit return to populate results'
    } else if (results.length < 1 && query !== '') {
      statement = ''
    } else if (results.length > 1 && query !== '') {
      statement = ''
    }

    return statement
  }

  render() {
    const searchResults = this.props.results.map((result, i) => (
      <li id='result-mod' key={i}>
        {result.park_id ? (this.trailLink(result)) : (this.parkLink(result))}
      </li>
    ))

    const query = this.props.query

    return (
      <div id='result-div'>
        {searchResults}
      </div>
    )
    
  }
}