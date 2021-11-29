import React from "react";
import { Link } from "react-router-dom";

const ReviewModule = ({review}) => {

  const date = new Date(review.actdate)
  const fulldate = date.toDateString().split(' ').slice(1)
  let datestring = ''
  datestring += fulldate[0] + ' ' + fulldate[1] + ', ' + fulldate[2]
  
  let stars = ''
  for(let i=0; i< review.rating; i++){
    stars += '\u2B50'
  }
  
  return (
      <div id={`review-module`}>
        <section id='review-stats'>
          <h1>{review.author}</h1>
          <div id='subheader'>
            <div id='rating'>{stars}</div>
          <p id='actdate'>{datestring}</p>
          </div>
          <div id='tags'>
            {/* {review.tags.map((tag) => (
              <TagItem tag={tag} key={tag.id} />
            ))} */}
          </div>
        </section>
        <section id='body'>
          <p>{review.body}</p>
        </section>
      </div>
  )
}

export default ReviewModule