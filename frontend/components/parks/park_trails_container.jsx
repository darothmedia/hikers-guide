import TrailLineup from "./trail_lineup";
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";

const mSTP = state => ({
  trails: Object.keys(state.entities.trails).map(key => state.entities.trails[key])
})

const mDTP = dispatch => ({
  fetchTrail: () => dispatch(fetchTrail())
})

export default connect(mSTP, mDTP)(TrailLineup)