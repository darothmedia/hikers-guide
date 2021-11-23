import React from "react";
import { Link } from 'react-router-dom'

export default class Explore extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchTrails()
  }

  render() {
    return (
      <div id='trails'>
        <ul>
          {this.props.trails.map((trail) => (
            <div key={trail.id}>
              <li>{trail.name}</li>
              <li>{trail.elevation}</li>
              <li>{trail.overview}</li>
              <li>{trail.difficulty}</li>
              <br />
            </div>
          ))
          }
        </ul>
      </div>
    )
  }
}