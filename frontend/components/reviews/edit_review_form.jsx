import React from "react";
import { FaStar } from 'react-icons/fa'

export default class EditReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.updateReview(this.state)
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
    this.props.fetchReview(this.props.reviewId)
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

  render() {
    const mPhoto = this.props.trail ? this.props.trail.m_photo : ""
    const name = this.props.trail ? this.props.trail.name : ""
    const body = this.state ? this.state.body : ""
    const rating = this.state ? this.state.rating : ""
    const actdate = this.state ? this.state.actdate : ""

    return (
      <div id='form-bg'>
        <img id='form-bg-photo' src={mPhoto} alt={name} />
        <form id='review-form'>
          <h1>{name}</h1>
          <textarea value={body} onChange={this.updateField('body')} />
          <label>Activity Date: <input type="date" value={actdate} onChange={this.updateField('actdate')} /></label>
          <div className='stars'>
            <label id="star">
              <input type="radio" value="1" name="rating"
                onMouseOver={() => { hover = 1 }} onMouseOut={(e) => { hover = 0 }}
                onClick={this.updateField('rating')} />
              {<FaStar key='1' size={30}
                color={(rating) >= 1 ? 'gold' : 'gray'} />}
            </label>
            <label id="star">
              <input type="radio" value="2" name="rating"
                // onMouseOver={() => { hover = 2 }} onMouseOut={() => { hover = 0 }} 
                onClick={this.updateField('rating')} />
              {<FaStar key='2' size={30}
                color={(rating) >= 2 ? 'gold' : 'gray'} />}
            </label>
            <label id="star">
              <input type="radio" value="3" name="rating"
                // onMouseOver={() => { hover = 3 }} onMouseOut={() => { hover = 0 }} 
                onClick={this.updateField('rating')} />
              {<FaStar key='3' size={30}
                color={(rating) >= 3 ? 'gold' : 'gray'} />}
            </label>
            <label id="star">
              <input type="radio" value="4" name="rating"
                // onMouseOver={() => { hover = 4 }} onMouseOut={() => { hover = 0 }} 
                onClick={this.updateField('rating')} />
              {<FaStar key='4' size={30}
                color={(rating) >= 4 ? 'gold' : 'gray'} />}
            </label>
            <label id="star">
              <input type="radio" value="5" name="rating"
                // onMouseOver={() => { hover = 5 }} onMouseOut={() => { hover = 0 }} 
                onClick={this.updateField('rating')} />
              {<FaStar key='5' size={30}
                color={(rating) >= 5 ? 'gold' : 'gray'} />}
            </label>
          </div>
          <div id='form-spacer'></div>
          <button onClick={(e) => this.handleSubmit(e)}>{this.props.type} review</button> 
          <div className='errors'>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    )

  }
}