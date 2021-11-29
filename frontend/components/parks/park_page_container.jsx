import ParkPage from './park_page'
import { connect } from "react-redux";
import { fetchPark } from "../../actions/park_actions";


const mSTP = (state, ownProps) => ({
  parkId: parseInt(ownProps.match.params.parkId),
  park: state.entities.parks[ownProps.match.params.parkId]
})

const mDTP = dispatch => ({
  fetchPark: (parkId) => dispatch(fetchPark(parkId)),
  fetchTrails: () => dispatch(fetchAllTrails()),
  fetchParks: () => dispatch(fetchAllParks())
})

export default connect(mSTP, mDTP)(ParkPage)