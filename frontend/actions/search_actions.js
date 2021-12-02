import * as APIUtil from '../util/search_api_util'

export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';

const receiveResults = (results) => {
  return {
    type: RECEIVE_RESULTS,
    results
  };
};

export const clearResults = () => {
  return {
    type: CLEAR_RESULTS
  }
}

export const fetchResults = query => dispatch => {
  return APIUtil.fetchSearch(query)
    .then(results => dispatch(receiveResults(results)));
}