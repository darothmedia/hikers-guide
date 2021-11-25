import React from "react";
import { Link } from 'react-router-dom'
import TrailModule from "../trails/trail_module";

export default class Explore extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchTrails()
  }

  render() {
    return (
      <div id='explore-bg'>
        <div id='trails'>
          {this.props.trails.map((trail) => (
            <TrailModule key={trail.id} trail={trail} />
          ))
          }
        </div>
        <div id='placeholder'></div>
      </div>
      
    )
  }
}