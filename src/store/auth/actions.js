export const SET_AUTHENTICATED = '[Auth] Set Authenticated'
export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated'

export const authenticated = (user) => ({ type: SET_AUTHENTICATED, payload: user })

export const notAuthenticated = () => ({ type: SET_UNAUTHENTICATED })
