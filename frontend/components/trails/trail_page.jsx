import React from "react";
import TrailMap from "../maps/map";
import { Link } from "react-router-dom";
import ReviewModule from "../reviews/review_module";
import ReviewFormContainer from '../reviews/review_form_container'
import ReviewForm from "../reviews/review_form";

export default class TrailPage extends React.Component {
  constructor(props){
    super(props)
    this.renderMap = this.renderMap.bind(this)
    this.reviews = this.reviews.bind(this)
    this.reviewAverage = this.reviewAverage.bind(this)
    this.formToggle = this.formToggle.bind(this)
  }
  
  componentDidMount(){
    this.props.fetchTrail(this.props.match.params.trailId)
  }

  renderMap(){
    const trail = this.props.trail
    return (trail.lng ? (<TrailMap lat={trail.lat} lng={trail.lng} token={window.mapboxToken} key={trail.id} />) : (''))
  }

  reviews(){
    const trail = this.props.trail
    const reviews = trail ? trail.reviews : []

    return(
      reviews.map((review, i) => (
        <ReviewModule key={review ? review.id : i} review={review ? review : {}} />
      ))
    ) 
  }

  reviewAverage(){
    const trail = this.props.trail
    const reviews = trail ? trail.reviews : []
    let sum = 0

    reviews.forEach((review) => {sum += review.rating})

    if (sum === 0) {return 'No reviews yet'}
    let avg = sum / reviews.length

    return `Average rating: ${avg.toFixed(1)}`
  }

  formToggle(){
    return (
      <ReviewFormContainer />
    )
  }
  
  render(){
    const trail = this.props.trail
    return (
      <div id='trail-page-container'>
        <header>
          <div id='image-cntr'>
            <img src={trail ? trail.m_photo : ""} alt="" />
          </div>
          <div id='gradient'>
            <div id='top-info'>
              <h1>{trail ? trail.name : ""}</h1>
              <div className='difficulty' id={trail ? trail.difficulty : ""}>{trail ? trail.difficulty : ""}</div>
              <h2>{trail ? <Link to={`/parks/${trail.parkId}`}>{trail.park}</Link> : ""}</h2>
            </div>
          </div>
        </header>
        <div id='divider'></div>
        <div id='page-split'>
          <section id='left-page'>
            <div id='trail-overview'>
              <p id='text-block'>{trail ? trail.overview : ""}</p>
            </div>
            <div id='trail-info'>
              <div id='length'>
                Length
                <br />
                <p>{trail ? trail.length : ""} mi </p>
              </div>
              <div id='elevation'>
                Elevation gain
                <br />
                <p>{trail ? trail.elevation : ""} ft</p>
              </div>
              <div id='rtype'>
                Route Type
                <br />
                <p>{trail ? trail.route_type : ""}</p>
              </div>
            </div>
            <div id='tags'>
            </div>
            <div id='description'>
              <div id='divider'><p id='desc-header'>Description</p></div>
              <p id='text-block'>{trail ? trail.description : ""}</p>
              <div id='divider'><p id='reviews-header'>Reviews</p></div>
            </div>
            <div id='reviews'>
              <p id='avg-rating'>{this.reviewAverage()}</p>
              <button onClick={() => this.formToggle}>Write review</button>
              {this.reviews()}
            </div>
            <div id='bottom'></div>
          </section>
          <section id='right-page'>
            <div id='map'>
              {/* {trail ? (<TrailMap lat={trail.lat} lng={trail.lng} token={window.mapboxToken} key={trail.id} />) : ('')} */}
            </div>
            <div id='nearby'>
            </div>
          </section>
      </div>
      </div>
    )
  }
}