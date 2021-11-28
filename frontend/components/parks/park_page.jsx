import React from "react";
import TrailMap from "../maps/map";
import ParkInfo from "./park_info";
import { Link } from "react-router-dom";

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
        <header id='park-header'>
          <div id='state'>
            <div>United States of America</div><div>•</div><div>{park ? park.state : ""}</div><div>•</div><div>{park ? park.name : ""}</div>
          </div>
          <div id='park-image'>
            <img src={park ? park.m_photo : ""} alt="" />
          </div>
          <h1>Best trails in {park ? park.name : ""}</h1>
        </header>
        <section id='overview'>
          Want to find the best trails in {park ? park.name : ""} for an adventurous 
          hike or a family trip? HikersGuide has {park ? park.trails.length + " " : ""} 
          great trails to explore!
        </section>
        <section id='park-map'>
          {park ? (<TrailMap lat={park.lat} lng={park.lng} token={window.mapboxToken} key={park.id} />) : ('')}
        </section>
        <h1>Park Information</h1>
        <section id='park-info'>
            <section id='park-left-info'>
              <div id='acreage'>
                <h2>Acreage:</h2>
                <p>{park ? park.acreage : ""} acres</p>
              </div>
              <div id='park-hours'>
                <h2>Park hours</h2>
                <p>{park ? park.hours : ""}</p>
              </div>
            </section>
            <section id='park-right-info'>
              <div id='links'>
                <h2>Helpful links</h2>
                {/* {park ? <Link to={`${park.fb_link}`}>Facebook</Link> : <></>}
                {park ? (<Link to={`${park.twitter_link}`}>Twitter</Link>) : (<></>)}
                {park ? (<Link to={`${park.web_link}`}>Website</Link>) : (<></>)} */}
              </div>
            </section>
          {/* <ParkInfo park={park} /> */}
        </section>
        <section id='park-trails'>
        </section>
      </div>
    )
  }
}