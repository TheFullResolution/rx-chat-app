export const CHAT_INIT_START = '[Chat] Start Initialize Chat'
export const CHAT_HISTORY_LOADED = '[Chat] Chat History Loaded'
export const CHAT_INIT_SUCCESSFUL = '[Chat] Initialize Chat Successful'
export const CHAT_NEW_MESSAGE = '[Chat] New Message'
export const CHAT_POST_MESSAGE = '[Chat] Post Message'
export const CHAT_MESSAGE_POSTED = '[Chat] Message Posted'

export const chatInitStart = () => ({ type: CHAT_INIT_START })
export const chatHistoryLoaded = (messages) => ({ type: CHAT_HISTORY_LOADED, payload: messages })
export const chatInitSuccessful = (messages) => ({ type: CHAT_INIT_SUCCESSFUL, payload: messages })
export const chatNewMessage = (message) => ({ type: CHAT_NEW_MESSAGE, payload: message })
export const chatPostMessage = (message) => ({ type: CHAT_POST_MESSAGE, payload: message })
export const chatMessagePosted = () => ({ type: CHAT_MESSAGE_POSTED })
