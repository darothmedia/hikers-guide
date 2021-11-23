import { RECEIVE_CURRENT_USER, LOG_OUT } from "../actions/session_actions";

const _nullSession = {
  currentUser: null,
}

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {currentUser: action.user.user})
    case LOG_OUT:
      return _nullSession;
    default:
      return state;
  }
}