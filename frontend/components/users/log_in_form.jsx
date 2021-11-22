import React from "react";
import { Link } from "react-router-dom";

export default class LogInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.logIn(this.state)
  }

  updateField(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div id='log-in-background'>
        <div id='log-in-form'>
          <form onSubmit={this.handleSubmit}>
            <h2>Log in and let's get going</h2>

            <input type="text" placeholder="Email" onChange={this.updateField('email')} value={this.state.email} />
            <br />
            <input type="password" placeholder="Password" onChange={this.updateField('password')} value={this.state.password} />

            <br />
            <button type="submit">Log in</button>
          </form>
          <div id='log-in-footer'>
            Don't have an account?
            <br />
            <br />
            <Link to='/' id='demo'>Log in as demo user</Link>
          </div>
        </div>
      </div>
    )
  }
}