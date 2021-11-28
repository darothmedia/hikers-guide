import * as APIUtil from '../util/park_api_util'

export const RECEIVE_PARK = 'RECEIVE_PARK'
export const RECEIVE_ALL_PARKS = 'RECEIVE_ALL_PARKS'

const receivePark = park => ({
  type: RECEIVE_PARK,
  park
})

const receiveAllParks = parks => ({
  type: RECEIVE_ALL_PARKS,
  parks
})

export const fetchAllParks = () => dispatch => APIUtil.fetchParks()
  .then(parks => dispatch(receiveAllParks(parks)))

export const fetchPark = (parkId) => dispatch => APIUtil.fetchPark(parkId)
  .then(park => dispatch(receivePark(park)))