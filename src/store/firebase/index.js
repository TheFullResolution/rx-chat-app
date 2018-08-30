import { from, forkJoin, BehaviorSubject } from 'rxjs'
import { tap, map } from 'rxjs/operators'
import { authListener } from '../auth/listener'

const CONFIG = {
    apiKey: 'AIzaSyC6UE-2WwLpQYXWwzq51RHwiz_HvgfDTPs',
    authDomain: 'sms-bird-app.firebaseapp.com',
    databaseURL: 'https://sms-bird-app.firebaseio.com',
    projectId: 'sms-bird-app',
    storageBucket: 'sms-bird-app.appspot.com',
    messagingSenderId: '194462414882',
}

const lazyLoadFireBase = (config) => {
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

const firebaseApp = new  BehaviorSubject()

    lazyLoadFireBase(CONFIG)
    .pipe(
        tap((app) => {
            authListener(app)
        })
    )
    .subscribe((app) => firebaseApp.next(app))

export { firebaseApp }
