import React from "react";
import { Link } from "react-router-dom";

export default class LogInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {email: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.logIn(user)
      .then(() => this.props.history.push('/'))
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
          return(
            <li key={`error-${i}`}>
              {error}
            </li>
          )
  })}
      </ul>
    )
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
            <div className='errors'>
              {this.renderErrors()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}