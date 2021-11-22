import { connect } from "react-redux";
import { createUser } from "../../actions/user_actions";
import SignUpForm from "./sign_up_form";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: 'signup'
})

const mDTP = dispatch => ({
  signUp: user => dispatch(createUser(user))
})

export default connect(mSTP, mDTP)(SignUpForm)