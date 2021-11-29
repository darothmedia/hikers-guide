import TrailPage from './trail_page'
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { fetchUser } from '../../util/user_api_util';

const mSTP = (state, ownProps) => ({
  trailId: parseInt(ownProps.match.params.trailId),
  trail: state.entities.trails[ownProps.match.params.trailId],
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(TrailPage)