import React from "react";

export default class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.submitEvent(this.state)
  }

  updateField(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }
  
  render(){
    <form action="">
      <input type="text" />
    </form>
  }
}