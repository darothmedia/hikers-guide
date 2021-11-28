import React from "react";
import { Link } from "react-router-dom";

const ParkInfo = ({park}) => {
  return(
    <div id='park-info'>
      <section id='park-left-info'>
        <h1>Park Information</h1>
        <div id='acreage'>
          <h2>Acreage:</h2>
          <p>{park.acreage} acres</p>
        </div>
        <div id='park-hours'>
          <h2>Park hours</h2>
          <p>{park.hours}</p>
        </div>
      </section>
      <section id='park-right-info'>
        <div id='links'>
          <h2>Helpful links</h2>
          {park.fb_link ? (<Link to={park.fb_link}>Facebook</Link>) : (<></>)}
          {park.twitter_link ? (<Link to={park.twitter_link}>Twitter</Link>) : (<></>)}
          {park.web_link ? (<Link to={park.web_link}>Website</Link>) : (<></>)}
        </div>
      </section>
    </div>
  )
}

export default ParkInfo