import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const reviews = {};
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      action.reviews.forEach((review) => {
        reviews[review.id] = review
      });
      return reviews;
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review })
    case REMOVE_REVIEW:
      let nState = Object.assign({}, state)
      delete nState[action.reviewId]
      return nState
    default:
      return state;
  }
}

export default ReviewsReducer