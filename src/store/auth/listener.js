import { store } from '../redux'
import { authenticated, notAuthenticated } from './actions'
import { authState } from 'rxfire/auth'

export const authListener = (firebaseApp) => {
    authState(firebaseApp.auth()).subscribe((user) => {
            if (user) {
                store.dispatch(authenticated(user))
            } else {
                store.dispatch(notAuthenticated())
            }
        })
}
