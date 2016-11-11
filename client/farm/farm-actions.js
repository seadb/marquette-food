import fetch from 'isomorphic-fetch'
import farms from './farm-data.js'

export const REQUEST_FARMS = 'REQUEST_FARMS'
export const RECEIVE_FARMS = 'RECEIVE_FARMS'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SORT_BY_NAME: 'SORT_BY_NAME'
}

function requestFarms() {
  return {
    type: REQUEST_FARMS
  }
}

function receiveFarms(json) {
  return {
    type: RECEIVE_FARMS,
    farms: json,
    receivedAt: Date.now()
  }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function fetchFarms() {
  return function (dispatch) {
    console.log(farms);
    dispatch(requestFarms())
    dispatch(receiveFarms(farms))
  }
}
