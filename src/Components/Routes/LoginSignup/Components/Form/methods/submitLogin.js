import { firebaseApp$ } from '../../../../../../store/firebase/config'

export const submitLogin = (values, { props, setSubmitting, setErrors }) => {
  firebaseApp$.subscribe((app) => {
    app
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .catch((err) => {
        setErrors({ form: err.message })
      })
      .finally(() => {
        setSubmitting(false)
      })
  })
}
