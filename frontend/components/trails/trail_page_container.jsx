import TrailPage from './trail_page'
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";

const mSTP = state => ({
  trail: state.entities.trails
})

const mDTP = dispatch => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId))
})

export default connect(mSTP, mDTP)(TrailPage)