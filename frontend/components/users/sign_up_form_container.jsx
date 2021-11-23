import { connect } from "react-redux";
import { signUp, logIn } from "../../actions/session_actions";
import SignUpForm from "./sign_up_form";
import { clearErrors } from "../../actions/session_actions";


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