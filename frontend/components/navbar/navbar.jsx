import React from "react";
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return(
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
          <Link to='/signup'>
            <button id='sign-up-button'>Sign Up</button>
          </Link>
          <Link to='/login'>
            <button id='log-in-button'>Log In</button>
          </Link>
        </section>
      </div>
    )
  }
}