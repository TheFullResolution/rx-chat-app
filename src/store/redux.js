import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import authReducer from './auth/reducer'
import firebaseReducer from './firebase/reducer'
import { startLoadingFirebaseEpic } from './firebase/epic'

const rootEpic = combineEpics(startLoadingFirebaseEpic)

const rootReducer = combineReducers({ auth: authReducer, firebase: firebaseReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()

const chatStore = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic)

export { chatStore }
