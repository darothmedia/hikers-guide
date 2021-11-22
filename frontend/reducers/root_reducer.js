import UsersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer'
import SessionReducer from './session_reducer'
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  errors: ErrorsReducer,
})

export default RootReducer