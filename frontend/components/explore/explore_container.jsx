import Explore from "./explore";
import { connect } from "react-redux";
import { fetchAllTrails } from "../../actions/trail_actions";
import { fetchAllParks } from "../../actions/park_actions";

const mSTP = state => ({
  trails: Object.keys(state.entities.trails).map(key => state.entities.trails[key])
})

const mDTP = dispatch => ({
  fetchTrails: () => dispatch(fetchAllTrails()),
  fetchParks: () => dispatch(fetchAllParks())
})

export default connect(mSTP, mDTP)(Explore)