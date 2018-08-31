export const handleSubmit = (values, { props, setSubmitting, setErrors }) => {
    // firebaseObservable.subscribe(app => {
    //     app.auth()
    //         .createUserWithEmailAndPassword(values.email, values.password)
    //         .then((user) => {
    //             setSubmitting(false)
    //
    //             console.log(user)
    //
    //             const ref = firebaseApp.database().ref('users')
    //
    //             return ref.push({ name: values.name, email: values.email })
    //         })
    //         .catch((err) => {
    //             setSubmitting(true)
    //             console.log(err)
    //             setErrors(err)
    //         })
    // })

    console.log(values)
}
