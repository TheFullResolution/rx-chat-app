import {
  CHAT_INIT_START,
  CHAT_HISTORY_LOADED,
  CHAT_MESSAGE_POSTED,
  CHAT_NEW_MESSAGE,
  CHAT_POST_MESSAGE,
  CHAT_INIT_SUCCESSFUL,
} from './actions'

const defaultState = {
  messages: [],
  submitting: false,
  loading: false,
  initiated: false,
}

const chatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHAT_INIT_START:
      return {
        ...state,
        loading: true,
      }
    case CHAT_HISTORY_LOADED:
      return {
        ...state,
        initiated: true,
        messages: action.payload,
      }
    case CHAT_INIT_SUCCESSFUL:
      return {
        ...state,
        initiated: true,
      }

    case CHAT_POST_MESSAGE:
      return {
        ...state,
        submitting: true,
      }
    case CHAT_MESSAGE_POSTED:
      return {
        ...state,
        submitting: false,
      }
    case CHAT_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }

    default:
      return state
  }
}

export default chatReducer
