import * as UserAPIUtil from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const REMOVE_USER = 'REMOVE_USER'

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

const clearErrors = () => ({
  type: CLEAR_ERRORS
})


export const requestUsers = () => dispatch => (UserAPIUtil.fetchUsers()
  .then(users => dispatch(receiveUsers(users))))

export const requestUser = (userId) => dispatch => (UserAPIUtil.fetchUser(userId)
  .then(user => dispatch(receiveUser(user))))

export const createUser = (user) => dispatch => (
  UserAPIUtil.signUp(user).then(user => (
    dispatch(receiveUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const updateUser = (user) => dispatch => (UserAPIUtil.updateUser(user)
  .then(user => dispatch(receiveUser(user))))

export const deleteUser = (userId) => dispatch => (UserAPIUtil.deleteUser(userId)
  .then(() => dispatch(removeUser(userId))))