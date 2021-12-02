import { RECEIVE_RESULTS, CLEAR_RESULTS } from "../actions/search_actions";

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESULTS:
      return action.results;
    case CLEAR_RESULTS:
      return [];
    default:
      return state;
  }
}

export default SearchReducer