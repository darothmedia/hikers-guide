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

export const fetchReview = (reviewId) => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    type: `GET`
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
    url: `/api/reviews/${review.id}`,
    type: `PATCH`,
    data: { review }
  })
)