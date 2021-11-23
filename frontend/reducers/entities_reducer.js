import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import TrailsReducer from "./trails_reducer"

export default combineReducers({
  users: UsersReducer,
  trails: TrailsReducer
})