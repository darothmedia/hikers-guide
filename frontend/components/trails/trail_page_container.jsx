import TrailPage from './trail_page'
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";

const mSTP = (state, ownProps) => ({
  trailId: parseInt(ownProps.match.params.trailId),
  trail: state.entities.trails[ownProps.match.params.trailId],
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId))
})

export default connect(mSTP, mDTP)(TrailPage)