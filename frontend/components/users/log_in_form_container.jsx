import { connect } from "react-redux";
import LogInForm from "./log_in_form";
import { requestUser } from "../../actions/user_actions";

const mSTP = props => ({
  user: { email: "", password: "" }
})

const mDTP = dispatch => ({
  logIn: user => dispatch(requestUser(user))
})

export default connect(mSTP, mDTP)(LogInForm)