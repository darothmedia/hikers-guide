import Navbar from "./navbar";
import { connect } from "react-redux";
import { logOut } from "../../actions/session_actions";

const mSTP = state => ({
  currentUser = state.session.currentUser
})

const mDTP = dispatch => ({
  logout: () => dispatch(logOut()),
})

export default connect(mSTP, mDTP)(Navbar)