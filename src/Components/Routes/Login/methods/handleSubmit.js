import { firebaseApp$ } from '../../../../store/firebase/config'

export const handleSubmit = (values, { props, setSubmitting, setErrors }) => {
    firebaseApp$.subscribe((app) => {
        app.auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then((user) => {
                console.log(user)
                setSubmitting(false)
            })
            .catch((err) => {
                console.log(err)
            })
    })
}
