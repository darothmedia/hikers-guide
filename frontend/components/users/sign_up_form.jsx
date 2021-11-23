import React from 'react'
import { Link } from 'react-router-dom'

class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { fname: "", lname: "", email: "", password: "" },
    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoUserLogin = this.demoUserLogin.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.signUp(this.state)
      .then(() => this.props.history.push('/'))
  }

  demoUserLogin(e) {
    e.preventDefault()
    const demo = { email: 'demo@user.com', password: 'password' }
    this.props.logIn(demo)
  }

  updateField(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          if (error.includes('Fname')) {
            error = `First name can't be blank`
          }
          if (error.includes('Lname')) {
            error = `Last name can't be blank`
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
          <button onClick={this.demoUserLogin} className='demo'>Log in as demo user</button>
          <div className='errors'>
              {this.renderErrors()}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default SignUpForm