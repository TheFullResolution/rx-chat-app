import { ofType } from 'redux-observable'
import {
    errorLoadingFirebase,
    finishedLoadingFirebase,
    START_LOADING_FIREBASE,
} from './actions'
import { tap, map, catchError,flatMap } from 'rxjs/operators'
import { authListener } from '../auth/listener'
import { CONFIG, lazyLoadFireBase } from './config'
import { firebaseApp$ } from './config'


export const startLoadingFirebaseEpic = (action$) =>
    action$.pipe(
        ofType(START_LOADING_FIREBASE),
        flatMap(() => lazyLoadFireBase(CONFIG)),
        tap((app) => {
            firebaseApp$.next(app)
            authListener(app)
        }),
    map(() => finishedLoadingFirebase()),
    catchError(error => errorLoadingFirebase(error))
    )

