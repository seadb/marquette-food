import fetch from 'isomorphic-fetch'
import farms from './farm-data.js'

export const REQUEST_FARMS = 'REQUEST_FARMS'
export const RECEIVE_FARMS = 'RECEIVE_FARMS'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_FARM = 'TOGGLE_FARM'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SORT_BY_NAME: 'SORT_BY_NAME'
}

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  farms: []
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

export function toggleFarm(index) {
  return {
    type: TOGGLE_FARM,
    index
  }
}

export function fetchFarms() {
  return function (dispatch) {
    dispatch(requestFarms())
    dispatch(receiveFarms(farms))
  }
}
