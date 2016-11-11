/* index.js
 *
 * desc: Creates store and passes to the Provider which is
 *      wrapped around the root of the App.  Use ReactDOM to 
 *      render inside <div id="root"> element in the DOM
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
//import reducer from './reducers'
import farmReducer from '../farm/farm-reducer'
//import App from './containers/App'
import Layout from './components/Layout'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  farmReducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)

