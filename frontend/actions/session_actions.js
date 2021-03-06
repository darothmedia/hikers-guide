import * as SessionAPIutil from '../util/session_api_util'
import * as UserAPIUtil from '../util/user_api_util'

export const LOG_OUT = 'LOG_OUT'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOG_OUT
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const logIn = (user) => dispatch => (
  SessionAPIutil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user))
  , error => (
      dispatch(receiveErrors(error.responseJSON))
  ))   
);

export const logOut = () => dispatch => (
  SessionAPIutil.logout()
    .then(() => dispatch(logoutCurrentUser()),
    error => dispatch(receiveErrors(error.responseJSON))
  )
)

export const signUp = (user) => dispatch => (
  UserAPIUtil.signUp(user).then(user => (
    dispatch(receiveUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);