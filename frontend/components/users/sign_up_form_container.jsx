import { connect } from "react-redux";
import { signUp } from "../../actions/session_actions";
import SignUpForm from "./sign_up_form";
import { clearErrors } from "../../actions/session_actions";


const mSTP = (state) => ({
  errors: state.errors.session,
  formType: 'signup'
})

const mDTP = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  clearErrors: errors => dispatch(clearErrors(errors))
})

export default connect(mSTP, mDTP)(SignUpForm)