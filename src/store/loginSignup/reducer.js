import {
  USER_LOGIN_COMPLETED,
  USER_LOGIN_SIGNUP_ERROR,
  USER_LOGIN_START,
  USER_SIGNUP_COMPLETED,
  USER_SIGNUP_START,
  USER_SIGNUP_UPDATE,
} from './actions'

const defaultState = {
  submitting: false,
  error: null,
}

const loginSignupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_SIGNUP_START:
    case USER_SIGNUP_UPDATE:
    case USER_LOGIN_START:
      return {
        ...state,
        submitting: true,
      }

    case USER_LOGIN_SIGNUP_ERROR:
      return { ...state, submitting: false, error: action.payload }

    case USER_SIGNUP_COMPLETED:
    case USER_LOGIN_COMPLETED:
      return {
        ...state,
        submitting: false,
        error: null,
      }
    default:
      return state
  }
}

export default loginSignupReducer
