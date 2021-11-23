import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  const nState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, action.users)
    case RECEIVE_USER:
      return Object.assign({}, nState, {[action.user.id]: action.user})
    case RECEIVE_CURRENT_USER:
    case REMOVE_USER:
      delete nState[action.userId]
      return nState
    default:
      return oldState
  }
}

export default UsersReducer