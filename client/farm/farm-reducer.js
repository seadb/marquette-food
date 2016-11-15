import { combineReducers } from 'redux'
import { REQUEST_FARMS, RECEIVE_FARMS, TOGGLE_FARM, SET_VISIBILITY_FILTER, VisibilityFilters } from './farm-actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  farms:
    {
      isFetching: false,
      data: []
    }
}

// @name visibilityFilter
// @desc Return the state given the state and a SET_VISIBILITY_FILTER action
function visibilityFilter(state = initialState.visibilityFilter, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// @name farms
// @desc Return the state given the state and a 
function farms(state = initialState.farms, action) {
  switch (action.type) {
    case REQUEST_FARMS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_FARMS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.farms,
      })
    case TOGGLE_FARM:
      return Object.assign({}, state, {
        data: state.data.map((farm, index) => {
          if (index+1 === action.index) {
            return Object.assign({}, farm, {
              selected: !farm.selected
            })
          }
          return farm
        })
      })
    default:
      return state
  }
}

// @name farmReducer
// same as:
//   export default function farmReducer(state = {}, action) {
//     return {
//       visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//       farms: farms(state.farms, action)
//     }
//   }
const farmReducer = combineReducers({
  visibilityFilter,
  farms
})


export default farmReducer
