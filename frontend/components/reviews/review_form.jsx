import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'

export default class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.submitReview(this.state)
      .then(() => this.props.history.push(`/trails/${this.props.trailId}`))
  }

  updateField(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  componentDidMount() {
    this.props.fetchTrail(this.props.trailId)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          if (error.includes('Actdate')) {
            error = `Please enter the date you were on this trail.`
          }
          if (error.includes('Rating')) {
            error = `Please give the trail a rating.`
          }
          if (error.includes('Body')) {
            error = `Please enter some text in your review.`
          }
          return (
            <li key={`error-${i}`}>
              {error}
            </li>
          )
        })}
      </ul>
    )
  }
  
  render(){
    let hover = 0;
    const trail = this.props.trail

    return(
      <div id='form-bg'>
        <img id='form-bg-photo' src={trail ? trail.m_photo : ""} alt={trail ? trail.name : ""} />
      <form id='review-form'>
        <h1>{trail ? trail.name : ""}</h1>
        <textarea placeholder='Write review' onChange={this.updateField('body')} />
        <label>Activity Date: <input type="date" onChange={this.updateField('actdate')} /></label>
        <div className='stars'>
          <label id="star">
            <input type="radio" value="1" name="rating"
            // onMouseOver={() => { hover = 1 }} onMouseOut={() => { hover = 0 }} 
            onClick={this.updateField('rating')} />
            {<FaStar key='1' size={30} 
            color={(hover || this.state.rating) >= 1 ? 'gold' : 'gray'} />}
            </label>
          <label id="star">
            <input type="radio" value="2" name="rating"
            // onMouseOver={() => { hover = 2 }} onMouseOut={() => { hover = 0 }} 
            onClick={this.updateField('rating')} />
            {<FaStar key='2' size={30} 
            color={(hover || this.state.rating) >= 2 ? 'gold' : 'gray'} />}
            </label>
          <label id="star">
            <input type="radio" value="3" name="rating"
            // onMouseOver={() => { hover = 3 }} onMouseOut={() => { hover = 0 }} 
            onClick={this.updateField('rating')} />
            {<FaStar key='3' size={30} 
            color={(hover || this.state.rating) >= 3 ? 'gold' : 'gray'} />}
            </label>
          <label id="star">
            <input type="radio" value="4" name="rating"
            // onMouseOver={() => { hover = 4 }} onMouseOut={() => { hover = 0 }} 
            onClick={this.updateField('rating')} />
            {<FaStar key='4' size={30} 
            color={(hover || this.state.rating) >= 4 ? 'gold' : 'gray'} />}
            </label>
          <label id="star">
            <input type="radio" value="5" name="rating"
            // onMouseOver={() => { hover = 5 }} onMouseOut={() => { hover = 0 }} 
            onClick={this.updateField('rating')} />
            {<FaStar key='5' size={30} 
            color={(hover || this.state.rating) >= 5 ? 'gold' : 'gray'} />}
            </label>
        </div>
        <div id='form-spacer'></div>
        <button onClick={(e) => this.handleSubmit(e)}>Submit review</button>
        <div className='errors'>
          {this.renderErrors()}
        </div>
      </form>
      </div>
    )
    
  }
}