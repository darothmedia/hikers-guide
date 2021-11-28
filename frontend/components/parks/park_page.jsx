import React from "react";
import TrailMap from "../maps/map";
import ParkInfo from "./park_info";

export default class ParkPage extends React.Component {
  constructor(props) {
    super(props)
    this.renderMap = this.renderMap.bind(this)
  }

  componentDidMount() {
    this.props.fetchPark(this.props.match.params.parkId)
  }

  renderMap() {
    const park = this.props.park
    return (park.lng ? (<TrailMap lat={park.lat} lng={park.lng} token={window.mapboxToken} key={park.id} />) : (''))
  }

  render() {
    const park = this.props.park
    return (
      <div id='park-page-container'>
        <header>
          <div id='park-image'>
            <img src={park ? park.m_photo : ""} alt="" />
          </div>
          <h1>Best trails in {park ? park.name : ""}</h1>
        </header>
        <section id='top-info'>
          {park ? (<ParkInfo park={park} key={park.id} />) : (<></>)}
        </section>
        <section id='map'>
            {park ? (<TrailMap lat={park.lat} lng={park.lng} token={window.mapboxToken} key={park.id} />) : ('')}
        </section>
        <section id='park-trails'>
        </section>
      </div>
    )
  }
}