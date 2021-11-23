import React from "react";
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.userNav = this.userNav.bind(this)
  }

  userNav(){
    return(
    (this.props.currentUser ? (
      <div id='user-nav'>
        <div id='user-name'>{this.props.currentUser.fname}</div>
        <button id='log-out' onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
      <div id='right-navlinks'>
        <Link to='/signup'>
          <button id='sign-up-button'>Sign Up</button>
        </Link >
        <Link to='/login'>
          <button id='log-in-button'>Log In</button>
        </Link>
      </div >
    )))
  }

  render(){
    return (
      <div id='navbar'>
        <section id='left-nav'>
          <Link to='/explore'>Explore</Link>
        </section>
        <section id='center'>
          <div id='logo'>
            <Link to='/'>
              <img src='https://hikers-guide.s3.us-west-1.amazonaws.com/logo/img/logo/hg-solo-logo4x.png' alt='HikersGuide logo' />
            </Link>
          </div>
          <div id='ttg-wrp'>
            <button id='ttg'>TO THE GALAXY</button>
          </div>
        </section>
        <section id='right-nav'>
          {this.userNav()}
        </section>
      </div>
    )
  }
}
