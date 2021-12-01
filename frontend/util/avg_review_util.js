import React from "react"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"

const reviewAverage = (reviews) => {
  let sum = 0
  reviews.forEach((review) => { sum += review.rating })

  if (sum === 0) { return (<div id='no-reviews'>No reviews yet</div>) }
  let avg = sum / reviews.length

  let stars = []
  for (let i = 0; i < Math.floor(avg); i++) {
    stars.push(<FaStar key={i} size={20} color={'gold'} />)
  }

  if (avg - Math.floor(avg) > 0.1) { stars.push(<FaStarHalfAlt key={0.5} size={20} color={'gold'} />) }

  while (stars.length < 5) {
    let i = stars.length
    stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
  }

  let plural = ' reviews'
  if (reviews.length < 2) { plural = ' review' }

  return (
    <div id='avg-rating'>
      <p>{avg.toFixed(1)}</p>
      <div id='stars'>{stars}</div>
      <h3>{reviews.length}{plural}</h3>
    </div>)
}

export default reviewAverage