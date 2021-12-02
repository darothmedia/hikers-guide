import React from "react";
import TrailMap from "../maps/map";
import ParkInfo from "./park_info";
import { Link } from "react-router-dom";
import TrailModule from "../trails/trail_module";

export default class ParkPage extends React.Component {
  constructor(props) {
    super(props)
    this.renderMap = this.renderMap.bind(this)
    this.greatTrails = this.greatTrails.bind(this)
    this.ParkTrails = this.parkTrails.bind(this)
  }

  componentDidMount() {
    this.props.fetchPark(this.props.match.params.parkId)
  }

  renderMap() {
    const park = this.props.park
    return (park.lng ? (<TrailMap lat={park.lat} lng={park.lng} token={window.mapboxToken} key={park.id} />) : (''))
  }

  greatTrails() {
    const park = this.props.park
    let string = 'HikersGuide has '
    let numTrails = 0
    park ? numTrails = park.trails.length : numTrails = 0
    if (numTrails === 1) { return string + numTrails + ' great trail to explore!'}
    else if (numTrails > 1) { return string + numTrails + ' great trails to explore!'}
    else { return <div>HikersGuide has no trails for this park yet. 
      {/* <Link to={`/`}>Click here</Link> to suggest a trail! */}
      </div> }
  }

  parkTrails(){
    const park = this.props.park
    const trails = park ? park.trails : []
    return(
        trails.map((trail, i) => (
          <TrailModule key={trail ? trail.id : i} trail={trail ? trail : ""} type='park' />
        ))
    )
  }

  render() {
    const park = this.props.park
    return (
      <div id='park-bg'>
      {park ?
        (<div id='park-page-container'>
        <header id='park-header'>
          <div id='state'>
            <div>United States of America</div><div>•</div><div>{park.state}</div><div>•</div><div>{park ? park.name : ""}</div>
          </div>
          <div id='park-image'>
            {/* <img src={park ? park.m_photo : ""} alt="" /> */}
          </div>
          <h1>Best trails in {park.name}</h1>
        </header>
        <section id='overview'>
          Want to find the best trails in {park.name} for an adventurous 
          hike or a family trip? {this.greatTrails()}
        </section>
        <section id='park-map'>
          {this.renderMap()}
        </section>
        <h1>Park Information</h1>
            <section id='park-info'>
              <section id='park-left-info'>
              <div id='acreage'>
                <h2>Acreage:</h2>
                <p>{park.acreage} acres</p>
              </div>
                {park.hours ? 
                (<div id='park-hours'>
                  <h2>Park hours</h2>
                  <p>{park.hours}</p>
                </div>) : null}
              </section> 
            <section id='park-right-info'>
              {((park.fb_link || park.twitter_link) || park.web_link) ?
                  (<div id='links'>
                    <h2>Helpful links</h2>
                    <ul>
                      <li>{park.fb_link ? (<a target='_blank' href={`${park.fb_link}`}>Facebook</a>) : null}</li>
                      <li>{park.twitter_link ? (<a target='_blank' href={`${park.twitter_link}`}>Twitter</a>) : null}</li>
                      <li>{park.web_link ? (<a target='_blank' href={`${park.web_link}`}>Website</a>) : null}</li>
                    </ul>
                  </div>) : null
            }
              
            </section>
          {/* <ParkInfo park={park} /> */}
            </section> 
        <section className='park-trails'>
            {this.parkTrails()}
        </section>
          </div>) : null
      }
      </div>
    )
  }
  }