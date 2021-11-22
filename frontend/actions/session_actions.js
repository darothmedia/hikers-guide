import * as SessionAPIutil from '../util/session_api_util'

export const LOG_OUT = 'LOG_OUT'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOG_OUT
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const logIn = user => dispatch => (
  SessionAPIutil.login(user)
    .then((user) => (
      dispatch(receiveCurrentUser(user)))
      .fail(errors => (dispatch(receiveErrors(errors.responseJSON)))
  )))

export const logOut = () => dispatch => (
  SessionAPIutil.logout()
    .then(() => dispatch(logoutCurrentUser()))
      .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)