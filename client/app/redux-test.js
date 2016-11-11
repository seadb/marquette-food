
import thunkMiddleware from 'redux-thunk'
import farmReducer from '../farm/farm-reducer'
let store = createStore(farmReducer, applyMiddleware(thunkMiddleware))

import { fetchFarms, setVisibilityFilter, VisibilityFilters } from '../farm/farm-actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
store.dispatch(fetchFarms())// Stop listening to state updates
unsubscribe()
 
