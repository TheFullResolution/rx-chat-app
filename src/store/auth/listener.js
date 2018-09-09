import { chatStore } from '../redux'
import { authenticated, notAuthenticated } from './actions'
import { user } from 'rxfire/auth'

export const authListener = (firebaseApp) => {
  user(firebaseApp.auth()).subscribe((user) => {
    if (user) {
      chatStore.dispatch(authenticated(user))
    } else {
      chatStore.dispatch(notAuthenticated())
    }
  })
}
