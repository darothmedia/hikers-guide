import * as APIUtil from '../util/review_api_util'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


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

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const fetchAllReviews = (trailId) => dispatch => APIUtil.fetchReviews(trailId)
  .then(reviews => dispatch(receiveAllReviews(reviews)))

export const fetchReview = (reviewId) => dispatch => APIUtil.fetchReview(reviewId)
  .then(review => dispatch(receiveReview(review)))

export const createReview = review => dispatch => APIUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)), 
  error => (dispatch(receiveErrors(error.responseJSON)))
  );

export const updateReview = review => dispatch => APIUtil.updateReview(review)
  .then(review => dispatch(receiveReview(review)),
    error => (dispatch(receiveErrors(error.responseJSON)))
    );

export const deleteReview = reviewId => dispatch => APIUtil.deleteReview(reviewId)
  .then(() => dispatch(removeReview(reviewId)))