import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store'
import { requestUsers } from './actions/user_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore()
  ReactDOM.render(<Root store={store}/>, root)
  window.requestUsers = requestUsers
})