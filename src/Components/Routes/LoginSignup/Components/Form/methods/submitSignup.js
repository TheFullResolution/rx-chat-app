import { firebaseApp$ } from '../../../../../../store/firebase/config'
import { chatStore } from '../../../../../../store/redux'
import { updateUser } from '../../../../../../store/auth/actions'

export const submitSignup = (values, { props, setSubmitting, setErrors }) => {
  firebaseApp$.subscribe((app) => {
    const auth = app.auth()

    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        setSubmitting(false)
        return auth.currentUser.updateProfile({ displayName: values.name })
      })
      .then(() => {
        chatStore.dispatch(updateUser(auth.currentUser))
      })
      .catch((err) => {
        setSubmitting(false)
        setErrors({ form: err.message })
      })
  })
}
