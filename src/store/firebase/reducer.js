import {
    ERROR_LOADING_FIREBASE,
    FINISHED_LOADING_FIREBASE,
    START_LOADING_FIREBASE,
} from './actions'

const defaultState = {
    loading: false,
    loaded: false,
    error: null,
}

const firebaseReducer = (state = defaultState, action) => {
    switch (action.type) {
        case START_LOADING_FIREBASE:
            return {
                ...state,
                loading: true,
            }

        case FINISHED_LOADING_FIREBASE:
            return {
                ...state,
                loading: false,
                loaded: true,
            }
        case ERROR_LOADING_FIREBASE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default firebaseReducer
