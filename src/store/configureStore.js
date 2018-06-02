import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import fighters from '../reducers/fighters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
  combineReducers({
    fighters
  }),
  composeEnhancers(applyMiddleware(logger, thunk))
  )
  return store
}

