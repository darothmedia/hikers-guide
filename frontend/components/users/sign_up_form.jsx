import React from 'react'
import { Link } from 'react-router-dom'


export default class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.signUp(this.state)
  }

  updateField(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render(){
    return(
      <div id='sign-up-background'>
      <div id='sign-up-form'>
        <form onSubmit={this.handleSubmit}>
          <h2>Create your free account</h2>

          <input type="text" placeholder="First name" onChange={this.updateField('fname')} value={this.state.fname}/>
          <br />
          <input type="text" placeholder="Last name" onChange={this.updateField('lname')} value={this.state.lname} />
          <br />
          <input type="text" placeholder="Email" onChange={this.updateField('email')} value={this.state.email} />
          <br />
          <input type="password" placeholder="Password" onChange={this.updateField('password')} value={this.state.password} />

          <br />
          <button type="submit">Sign up</button>
        </form>
        <div id='log-in-question'>
          Already have an account? <Link to='/login'>Log in</Link>
          <br />
          <br />
          <Link to='/' id='demo'>Log in as demo user</Link>
        </div>
      </div>
      </div>
    )
  }
}