import { firebaseApp } from '../../firebase'
import { authState } from 'rxfire/auth'
import { store } from '../redux'
import { authenticated, notAuthenticated } from './actions'


export const authListener = () => {
    authState(firebaseApp.auth()).subscribe(user => {
        if(user) {
            store.dispatch(authenticated(user))
        } else {
            store.dispatch(notAuthenticated())
        }
    });
}
