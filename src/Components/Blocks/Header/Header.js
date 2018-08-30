import React from 'react'
import { firebaseApp } from '../../../store/firebase'

const logOut = (ev) => {
    ev.preventDefault()

    firebaseApp.subscribe((app) => {
        app.auth().signOut()
    })
    firebaseApp.unsubscribe()
}

export const Header = () => (
    <header>
        <h1>SMS APP</h1>
        <nav>
            <button onClick={logOut}>Logout</button>
        </nav>
    </header>
)
