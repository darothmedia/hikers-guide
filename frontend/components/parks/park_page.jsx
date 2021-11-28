import React from "react";
import TrailMap from "../maps/map";

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
          <div id='image-cntr'>
            <img src={park ? park.m_photo : ""} alt="" />
          </div>
          <div id='gradient'>
            <div id='top-info'>
              <h1>{park ? park.name : ""}</h1>
              <div className='difficulty' id={park ? park.difficulty : ""}>{park ? park.difficulty : ""}</div>
              <h2>{park ? park.park : ""}</h2>
            </div>
          </div>
        </header>
        <div id='divider'></div>
        <div id='page-split'>
          <section id='left-page'>
            <div id='park-overview'>
              <p id='text-block'>{park ? park.overview : ""}</p>
            </div>
            <div id='park-info'>
              <div id='length'>
                Length
                <br />
                <p>{park ? park.length : ""} mi </p>
              </div>
              <div id='elevation'>
                Elevation gain
                <br />
                <p>{park ? park.elevation : ""} ft</p>
              </div>
              <div id='rtype'>
                Route Type
                <br />
                <p>{park ? park.route_type : ""}</p>
              </div>
            </div>
            <div id='tags'>
            </div>
            <div id='description'>
              <div id='divider'><p id='desc-header'>Description</p></div>
              <p id='text-block'>{park ? park.description : ""}</p>
              <div id='divider'><p id='reviews-header'>Reviews</p></div>
            </div>
            <div id='bottom'></div>
          </section>
          <section id='right-page'>
            <div id='map'>
              {park ? (<TrailMap lat={park.lat} lng={park.lng} token={window.mapboxToken} key={park.id} />) : ('')}
            </div>
            <div id='nearby'>
            </div>
          </section>
        </div>
      </div>
    )
  }
}