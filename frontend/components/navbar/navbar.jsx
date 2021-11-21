import React from "react";
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  render(){
    return(
      <div id='navbar'>
        <div id='left-nav'>
          <Link to='/'>Explore</Link>
        </div>
        <div id='logo'>
          <img src='https://hikers-guide.s3.us-west-1.amazonaws.com/logo/img/logo/hg-solo-logo4x.png' alt='HikersGuide logo' />
          <img src="https://hikers-guide.s3.us-west-1.amazonaws.com/logo/img/buttons/ttg-button-inactive%404x.png" alt="To The Galaxy" />
        </div>
        <div id='right-nav'>
          <Link to='/signup'>
            <button id='sign-up-button'>Sign Up</button>
            <button id='log-in-button'>Log In</button>
          </Link>
        </div>

        
      </div>
    )
  }
}