import React from "react";
import { Link } from "react-router-dom";
import { FaMapSigns, FaTree } from "react-icons/fa";

export default class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchResults(this.props.query)
  }

  render() {
    this.props.results.map((result, i) => (
      <div>
        {(result.type === trail) ? (
        <Link to={`/trails/${result.id}`} key={i}>
        </Link>) 
        : (
        <Link to={`/parks/${result.id}`} key={i}>
        </Link>
        )}
      </div>
    ))
  }
}