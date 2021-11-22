import UsersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer'
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  users: UsersReducer,
  errors: ErrorsReducer
})

export default RootReducer