import * as UserAPIUtil from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
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


export const requestUsers = () => dispatch => UserAPIUtil.fetchUsers()
  .then(users => dispatch(receiveUsers(users)))

export const requestUser = (userId) => dispatch => UserAPIUtil.fetchUser(userId)
  .then(user => dispatch(receiveUser(user)))

export const createUser = (user) => dispatch => UserAPIUtil.signUp(user)
  .then(user => dispatch(receiveUser(user)))

export const updateUser = (user) => dispatch => UserAPIUtil.updateUser(user)
  .then(user => dispatch(receiveUser(user)))

export const deleteUser = (userId) => dispatch => UserAPIUtil.deleteUser(userId)
  .then(() => dispatch(removeUser(userId)))