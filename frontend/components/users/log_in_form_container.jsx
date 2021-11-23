import { connect } from "react-redux";
import LogInForm from "./log_in_form";
import { logIn, clearErrors } from "../../actions/session_actions";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: 'login'
})

const mDTP = dispatch => ({
  logIn: user => dispatch(logIn(user)),
  clearErrors: errors => dispatch(clearErrors(errors))
})

export default connect(mSTP, mDTP)(LogInForm)