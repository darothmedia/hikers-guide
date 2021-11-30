import ReviewForm from "./review_form";
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { createReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => ({
  review: { body: "", actdate: "", author_id: state.session.currentUser.id, trail_id: parseInt(ownProps.match.params.trailId)},
  trailId: parseInt(ownProps.match.params.trailId)
})

const mDTP = dispatch => ({
  submitReview: (review) => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)