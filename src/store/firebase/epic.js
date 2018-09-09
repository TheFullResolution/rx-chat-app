import { ofType } from 'redux-observable'
import { errorLoadingFirebase, finishedLoadingFirebase, START_LOADING_FIREBASE } from './actions'
import { tap, map, catchError, flatMap } from 'rxjs/operators'
import { CONFIG, lazyLoadFireBase } from './config'

export const startLoadingFirebaseEpic = (action$, state$, { firebase, listeners }) =>
  action$.pipe(
    ofType(START_LOADING_FIREBASE),
    flatMap(() => lazyLoadFireBase(CONFIG)),
    tap((app) => {
      firebase.next(app)
      listeners.auth(app)
    }),
    map(() => finishedLoadingFirebase()),
    catchError((error) => errorLoadingFirebase(error))
  )
