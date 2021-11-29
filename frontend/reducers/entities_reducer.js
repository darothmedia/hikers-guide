import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import TrailsReducer from "./trails_reducer"
import ParksReducer from "./parks_reducer"
import ReviewsReducer from "./reviews_reducer";

export default combineReducers({
  users: UsersReducer,
  trails: TrailsReducer,
  parks: ParksReducer,
  reviews: ReviewsReducer
})