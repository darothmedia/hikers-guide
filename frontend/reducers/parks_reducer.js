import { RECEIVE_ALL_PARKS, RECEIVE_PARK } from "../actions/park_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  const parks = {};
  switch (action.type) {
    case RECEIVE_ALL_PARKS:
      action.parks.forEach((park) => {
        parks[park.id] = park
      });
      return parks;
    case RECEIVE_PARK:
      return Object.assign({}, state, { [action.park.id]: action.park })
    default:
      return state;
  }
}