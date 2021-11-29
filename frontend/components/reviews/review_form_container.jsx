import ReviewForm from "./review_form";
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";

const mSTP = (state, ownProps) => ({
  review: { body: "", actdate: "", user_id: state.session.currentUser, trail_id: state.entities.trails[ownProps.match.params.trailId].id},
})

const mDTP = dispatch => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId))
})

export default connect(mSTP, mDTP)(ReviewForm)