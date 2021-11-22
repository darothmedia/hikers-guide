import { connect } from "react-redux";
import LogInForm from "./log_in_form";
import { logIn } from "../../actions/session_actions";

const mSTP = ({errors}) => ({
  errors: errors.session,
  formType: 'login'
})

const mDTP = dispatch => ({
  logIn: user => dispatch(logIn(user))
})

export default connect(mSTP, mDTP)(LogInForm)