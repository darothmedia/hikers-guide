import Splash from "./splash";
import { connect } from "react-redux";
import { fetchAllTrails } from "../../actions/trail_actions";


const mSTP = props => ({

})

const mDTP = dispatch => ({
  fetchTrails: () => dispatch(fetchAllTrails()),
})

export default connect(mSTP, mDTP)(Splash)