import React from "react";
import { Link } from "react-router-dom";

const ReviewModule = ({review, fetchUser}) => {

  return (
      <div id={`review-module`}>
        <section id='review-stats'>
          <h1>{review.author}</h1>
          <div id='subheader'>
            <div id='rating'>{`${review.rating}`}</div>
            <p id='actdate'>{review.actdate}</p>
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