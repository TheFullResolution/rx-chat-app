import { from, forkJoin, ReplaySubject } from 'rxjs'
import { map } from 'rxjs/operators'

export const CONFIG = {
    apiKey: 'AIzaSyAAsGd3U0S2t4IKGEk6r2YFeGlwoh7c1ho',
    authDomain: 'lazyload-firebase-react-rxjs.firebaseapp.com',
    databaseURL: 'https://lazyload-firebase-react-rxjs.firebaseio.com',
    projectId: 'lazyload-firebase-react-rxjs',
    storageBucket: 'lazyload-firebase-react-rxjs.appspot.com',
    messagingSenderId: '185436417713',
}

export const COLLECTION = 'messages'

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
