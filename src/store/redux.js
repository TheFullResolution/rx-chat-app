import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import authReducer from './auth/reducer'
import firebaseReducer from './firebase/reducer'
import { startLoadingFirebaseEpic } from './firebase/epic'
import chatReducer from './chat/reducer'
import { firebaseApp$ } from './firebase/config'
import { chatInitEpic, chatInitSuccessfulEpic, chatPostMessageEpic } from './chat/epics'
import { authListener } from './auth/listener'
import { chatListener } from './chat/listener'

const rootEpic = combineEpics(
  startLoadingFirebaseEpic,
  chatInitEpic,
  chatInitSuccessfulEpic,
  chatPostMessageEpic
)

const rootListeners = {
  auth: authListener,
  chat: chatListener,
}

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  chat: chatReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware({
  dependencies: { firebase: firebaseApp$, listeners: rootListeners },
})

const chatStore = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic)

export { chatStore }
