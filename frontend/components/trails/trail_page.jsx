import React from "react";
import TrailMap from "../maps/map";
import { Link } from "react-router-dom";
import ReviewModule from "../reviews/review_module";
import ReviewFormContainer from '../reviews/review_form_container'
import reviewAverage from "../../util/avg_review_util";

export default class TrailPage extends React.Component {
  constructor(props){
    super(props)
    this.renderMap = this.renderMap.bind(this)
    this.reviews = this.reviews.bind(this)
    this.formToggle = this.formToggle.bind(this)
  }
  
  componentDidMount(){
    this.props.fetchTrail(this.props.match.params.trailId)
      .then(() => (this.props.fetchAllReviews()))
  }

  renderMap(){
    const trail = this.props.trail
    return (trail.lng ? (
    <TrailMap 
      lat={trail.lat} 
      lng={trail.lng} 
      token={window.mapboxToken} 
      key={trail.id} />
    ) : (''))
  }

  reviews(){
    const reviews = this.props.reviews
    // const reviews = trail ? trail.reviews : []

    return(
      reviews.map((review, i) => (
        <ReviewModule 
          key={review.id + i} 
          review={review ? review : {}} 
          currentUser={this.props.currentUser} 
          deleteReview={this.props.deleteReview}
          author={review.author} />
      ))
    ) 
  }

  formToggle(){
    return (
      <ReviewFormContainer />
    )
  }
  
  render(){
    const trail = this.props.trail
    return (
      <div id='bg'>
      <div id='trail-page-container'>
        <header>
          <div id='image-cntr'>
            <img src={trail ? trail.mainPhotoUrl : ""} alt="" />
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
              {reviewAverage(this.props.reviews, 'Page')}
              {this.props.currentUser ? 
                <Link to={`/trails/${trail ? trail.id : 0}/reviews`}><button id='rev-button'>Write review</button></Link> : 
                <Link to={`/login`}><button className='login-btn' id='rev-button'>Log in to write a review</button></Link> }
              {this.reviews()}
            </div>
            <div id='bottom'></div>
          </section>
          <section id='right-page'>
            <div id='map'>
              {trail ? (<TrailMap lat={trail.lat} lng={trail.lng} token={window.mapboxToken} key={trail.id} />) : ('')}
            </div>
            <div id='nearby'>
            </div>
          </section>
        </div>
      </div>
      </div>
    )
  }
}