import { firebaseApp$ } from '../../../../../../store/firebase/config'

export const submitLogin = (values, { props, setSubmitting, setErrors }) => {
    firebaseApp$.subscribe((app) => {
        app.auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                setSubmitting(false)
            })
            .catch((err) => {
              console.log(err)
              setErrors({form: err})
            })
    })
}
