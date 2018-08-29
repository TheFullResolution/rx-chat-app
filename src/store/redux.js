import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import authReducer from './auth/reducer'

const rootEpic = combineEpics()

const rootReducer = combineReducers({auth: authReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic)

export { store }
