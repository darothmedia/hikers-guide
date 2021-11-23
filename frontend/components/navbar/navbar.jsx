import React from "react";
import { Link } from 'react-router-dom'

export default ({currentUser, logout}) => {
  const display = currentUser ? (
    <div id='user-nav'>
      <div id='user-name'>{currentUser.fname}</div>
      <button id='log-out' onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div id = 'right-navlinks'>
      {console.log(currentUser)}
      <Link to = '/signup'>
        <button id = 'sign-up-button'>Sign Up</button>
      </Link >
      <Link to='/login'>
      <button id='log-in-button'>Log In</button>
      </Link>
    </div >
  )

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
          {display}
        </section>
      </div>
    )
}
