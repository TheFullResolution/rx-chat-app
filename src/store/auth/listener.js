import { chatStore } from '../redux'
import { authenticated, notAuthenticated } from './actions'
import { authState } from 'rxfire/auth'

export const authListener = (firebaseApp) => {
  authState(firebaseApp.auth()).subscribe((user) => {
    if (user) {
      chatStore.dispatch(authenticated(user))
    } else {
      chatStore.dispatch(notAuthenticated())
    }
  })
}
