export const createReview = (review) => (
  $.ajax({
    url: `/api/trails/${review.trail_id}/reviews`,
    type: `POST`,
    data: { review }
  })
)

export const fetchReviews = (trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/reviews`,
    type: `GET`
  })
)

export const fetchReview = (review) => (
  $.ajax({
    url: `/api/trails/${review.trail_id}/reviews/${review.id}`,
    type: `GET`,
    data: {review}
  })
)

export const deleteReview = (reviewId) => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    type: `DELETE`
  })
)

export const updateReview = (review) => (
  $.ajax({
    url: `/api/trails/${review.trail_id}/reviews/${review.id}/edit`,
    type: `PATCH`,
    data: { review }
  })
)