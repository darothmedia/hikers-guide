import EditReviewForm from "./edit_review_form";
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { clearErrors, updateReview, fetchReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => ({
  reviewId: parseInt(ownProps.match.params.reviewId),
  review: state.entities.reviews[ownProps.match.params.reviewId],
  trailId: parseInt(ownProps.match.params.trailId),
  trail: state.entities.trails[ownProps.match.params.trailId],
  errors: state.errors.reviews,
  type: 'Update'
})

const mDTP = dispatch => ({
  updateReview: (review) => dispatch(updateReview(review)),
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  clearErrors: errors => dispatch(clearErrors(errors)),
  fetchTrail: trailId => dispatch(fetchTrail(trailId))
})

export default connect(mSTP, mDTP)(EditReviewForm)