import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, UPDATE_USER } from './actions'

const defaultState = {
  loggedIn: false,
  profileLoaded: false,
  user: null,
}

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        loggedIn: true,
        profileLoaded: true,
        user: { uid: action.payload.uid, displayName: action.payload.displayName },
      }
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, displayName: action.payload.displayName },
      }
    case SET_UNAUTHENTICATED:
      return { ...defaultState, profileLoaded: true }
    default:
      return state
  }
}

export default authReducer
