import { connect } from "react-redux";
import { signUp, logIn, clearErrors } from "../../actions/session_actions";
import SignUpForm from "./sign_up_form";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: 'signup'
})

const mDTP = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  logIn: user => dispatch(logIn(user)),
  clearErrors: errors => dispatch(clearErrors(errors))
})

export default connect(mSTP, mDTP)(SignUpForm)