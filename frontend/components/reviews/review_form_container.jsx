import ReviewForm from "./review_form";
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { createReview, clearErrors } from '../../actions/review_actions'

const mSTP = (state, ownProps) => ({
  review: { body: "", actdate: "", author_id: state.session.currentUser.id, trail_id: parseInt(ownProps.match.params.trailId)},
  trailId: parseInt(ownProps.match.params.trailId),
  trail: state.entities.trails[ownProps.match.params.trailId],
  errors: state.errors.reviews
})

const mDTP = dispatch => ({
  submitReview: (review) => dispatch(createReview(review)),
  clearErrors: errors => dispatch(clearErrors(errors)),
  fetchTrail: trailId => dispatch(fetchTrail(trailId))
})

export default connect(mSTP, mDTP)(ReviewForm)