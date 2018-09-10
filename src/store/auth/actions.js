export const SET_AUTHENTICATED = '[Auth] Set Authenticated'
export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated'
export const SET_USER_UPDATE = '[Auth] Set User Update'

export const setAuthenticated = (user) => ({ type: SET_AUTHENTICATED, payload: user })

export const setUnauthenticated = () => ({ type: SET_UNAUTHENTICATED })

export const setUserUpdate = (user) => ({ type: SET_USER_UPDATE, payload: user })




