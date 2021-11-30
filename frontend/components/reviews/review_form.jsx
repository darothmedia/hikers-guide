import React from "react";
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


    return(
      <form action="">
        <textarea placeholder='Write review' onChange={this.updateField('body')} />
        <br />
        <label>Activity Date: <input type="date" onChange={this.updateField('actdate')} /></label>
        <br />
        <label className="star" id='1'><input type="radio" value="1" name="rating" onClick={this.updateField('rating')} />{<FaStar key='1' size={30} color={this.state.rating >= 1 ? 'gold' : 'gray'} />}</label>
        <label className="star"><input type="radio" value="2" name="rating" onClick={this.updateField('rating')} />{<FaStar key='2' size={30} color={this.state.rating >= 2 ? 'gold' : 'gray'}/>}</label>
        <label className="star"><input type="radio" value="3" name="rating" onClick={this.updateField('rating')} />{<FaStar key='3' size={30} color={this.state.rating >= 3 ? 'gold' : 'gray'}/>}</label>
        <label className="star"><input type="radio" value="4" name="rating" onClick={this.updateField('rating')} />{<FaStar key='4' size={30} color={this.state.rating >= 4 ? 'gold' : 'gray'}/>}</label>
        <label className="star"><input type="radio" value="5" name="rating" onClick={this.updateField('rating')} />{<FaStar key='5' size={30} color={this.state.rating >= 5 ? 'gold' : 'gray'}/>}</label>
        <br />
        <button onClick={(e) => this.handleSubmit(e)}>Submit review</button>
        <div className='errors'>
          {this.renderErrors()}
        </div>
      </form>
    )
    
  }
}