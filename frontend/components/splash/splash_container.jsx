import Splash from "./splash";
import { connect } from "react-redux";


const mSTP = props => ({
  tagline: localStorage.theme
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Splash)