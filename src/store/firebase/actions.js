export const START_LOADING_FIREBASE = '[Firebase] Loading'
export const FINISHED_LOADING_FIREBASE = '[Firebase] Loaded'
export const ERROR_LOADING_FIREBASE = '[Firebase] Error'

export const startLoadingFirebase = () => ({ type: START_LOADING_FIREBASE })

export const finishedLoadingFirebase = () => ({ type: FINISHED_LOADING_FIREBASE })

export const errorLoadingFirebase = (error) => ({ type: ERROR_LOADING_FIREBASE, payload: error })
