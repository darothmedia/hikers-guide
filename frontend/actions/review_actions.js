import * as APIUtil from '../util/review_api_util'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const fetchAllReviews = () => dispatch => APIUtil.fetchReviews()
  .then(reviews => dispatch(receiveAllReviews(reviews)))

export const fetchReview = (review) => dispatch => APIUtil.fetchReview(review)
  .then(review => dispatch(receiveReview(review)))

export const createReview = review => dispatch => APIUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)))

export const updateReview = review => dispatch => APIUtil.updateReview(review)
  .then(review => dispatch(receiveReview(review)))

export const deleteReview = reviewId => dispatch => APIUtil.deleteReview(reviewId)
  .then(() => dispatch(removeReview(reviewId)))