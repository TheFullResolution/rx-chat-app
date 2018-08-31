import { from, forkJoin, ReplaySubject } from 'rxjs'
import { map } from 'rxjs/operators'

export const CONFIG = {
    apiKey: 'AIzaSyC6UE-2WwLpQYXWwzq51RHwiz_HvgfDTPs',
    authDomain: 'sms-bird-app.firebaseapp.com',
    databaseURL: 'https://sms-bird-app.firebaseio.com',
    projectId: 'sms-bird-app',
    storageBucket: 'sms-bird-app.appspot.com',
    messagingSenderId: '194462414882',
}

export const lazyLoadFireBase = (config) => {
    const app$ = from(import('firebase/app'))
    const firestore$ = from(import('firebase/firestore'))
    const fireAuth$ = from(import('firebase/auth'))

    return forkJoin(app$, firestore$, fireAuth$).pipe(
        map(([firebase]) => {
            const app = firebase.initializeApp(config)

            app.firestore().settings({ timestampsInSnapshots: true })

            app.firestore().enablePersistence()

            return app
        })
    )
}

const firebaseApp$ = new ReplaySubject(1)

firebaseApp$.asObservable()

export { firebaseApp$ }
