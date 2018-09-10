import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import authReducer from './auth/reducer'
import firebaseReducer from './firebase/reducer'
import { startLoadingFirebaseEpic } from './firebase/epics'
import chatReducer from './chat/reducer'
import { firebaseApp$ } from './firebase/config'
import { chatInitEpic, chatInitSuccessfulEpic, chatPostMessageEpic } from './chat/epics'
import loginSignupReducer from './loginSignup/reducer'
import { userLoginStartEpic, userSignupStartEpic, userSignupUpdateEpic } from './loginSignup/epics'
import { startAuthListenerEpic } from './auth/epics'

const rootEpic = combineEpics(
  startLoadingFirebaseEpic,
  startAuthListenerEpic,
  userLoginStartEpic,
  userSignupStartEpic,
  userSignupUpdateEpic,
  chatInitEpic,
  chatInitSuccessfulEpic,
  chatPostMessageEpic
)

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  firebase: firebaseReducer,
  loginSignup: loginSignupReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware({
  dependencies: { firebase: firebaseApp$ },
})

const chatStore = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic)

export { chatStore }
