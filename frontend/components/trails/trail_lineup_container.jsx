import TrailLineup from "./trail_lineup";
import { connect } from "react-redux";
import { fetchAllTrails, fetchTrail } from "../../actions/trail_actions";
import React from "react";

const mSTP = state => ({
  trails: Object.values(state.entities.trails)
    // .map(key => state.entities.trails[key])
})

const mDTP = dispatch => ({
  fetchTrails: () => dispatch(fetchAllTrails()),
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId))
})

export default connect(mSTP, mDTP)(TrailLineup)