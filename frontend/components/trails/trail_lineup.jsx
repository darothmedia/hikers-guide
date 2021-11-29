import React from "react";
import { Link } from 'react-router-dom'
import TrailModule from "../trails/trail_module";

export default class TrailLineup extends React.Component {
  constructor(props) {
    super(props)
    this.connectFour = this.connectFour.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrails()
  }

  connectFour() {
    const allTrails = Array.from(this.props.trails)
    let four = []
    while (four.length < 4) {
      let t = (Math.floor(Math.random() * allTrails.length))
      four.push(allTrails[t])
      allTrails.splice(t, 1)
    }
    return four
  }

  render() {
    return (
      <div id='trail-lineup'>
        <div id='trails'>
          {this.connectFour().map((trail, i) => (
            <TrailModule key={trail ? trail.id : i} trail={trail ? trail : ""} type='trail' />
          ))
          }
        </div>
        <div id='placeholder'></div>
      </div>
    )
  }
}