import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './actions'

const defaultState = {
    auth: false,
    user: null,
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                auth: true,
                user: action.payload,
            }

        case SET_UNAUTHENTICATED:
            return defaultState
        default:
            return state
    }
}

export default authReducer
