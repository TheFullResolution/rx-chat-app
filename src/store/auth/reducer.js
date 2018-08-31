import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './actions'

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
                user: action.payload,
            }

        case SET_UNAUTHENTICATED:
            return { ...defaultState, profileLoaded: true }
        default:
            return state
    }
}

export default authReducer
