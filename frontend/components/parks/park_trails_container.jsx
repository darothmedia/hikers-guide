import Explore from "../explore/explore";
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";

const mSTP = (state, ownProps) => ({
  park: ownProps.park,
  trails: Object.keys(state.entities.trails).map(key => state.entities.trails[key])
})

const mDTP = (dispatch) => ({
  fetchTrail: () => dispatch(fetchTrail())
})

export default connect(mSTP, mDTP)(Explore)