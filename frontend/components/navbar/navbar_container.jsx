import React from "react";
import Navbar from "./navbar";
import { connect } from "react-redux";
import { logOut } from "../../actions/session_actions";

const mSTP = ({entities, session}) => ({
  currentUser = entities.users
})

const mDTP = dispatch => ({
  logout: () => dispatch(logOut()),
})

export default connect(mSTP, mDTP)(Navbar)