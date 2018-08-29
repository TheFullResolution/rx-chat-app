import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: 'AIzaSyC6UE-2WwLpQYXWwzq51RHwiz_HvgfDTPs',
    authDomain: 'sms-bird-app.firebaseapp.com',
    databaseURL: 'https://sms-bird-app.firebaseio.com',
    projectId: 'sms-bird-app',
    storageBucket: 'sms-bird-app.appspot.com',
    messagingSenderId: '194462414882',
}

firebase.initializeApp(config)

const firebaseApp = firebase

export {firebaseApp}

