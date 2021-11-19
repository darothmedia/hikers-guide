import React from 'react'
import { Link } from 'react-router-dom'


export default class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.user = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.signUp(this.user)
  }

  updateField(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render(){
    return(
      <div id='sign-up-form'>
        <form onSubmit={this.handleSubmit}>
          <h1>Create your free account</h1>
          <label id='form-labels'>First name
            <input type="text" onChange={this.updateField('fname')} value={this.user.fname}/>
          </label>
          <label id='form-labels'>Last name
            <input type="text" onChange={this.updateField('lname')} value={this.user.lname} />
          </label>
          <label id='form-labels'>Email
            <input type="text" onChange={this.updateField('email')} value={this.user.email} />
          </label>
          <label id='form-labels'>Password
            <input type="password" onChange={this.updateField('password')} value={this.user.password} />
          </label>
          <button type="submit" value='Sign up'></button>
        </form>
        <div id='log-in-question'>
          Already have an account? <Link to='/'>Log in</Link>
        </div>
      </div>
    )
  }
}