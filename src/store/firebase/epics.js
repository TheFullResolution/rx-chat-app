import { ofType } from 'redux-observable'
import { errorLoadingFirebase, finishedLoadingFirebase, START_LOADING_FIREBASE } from './actions'
import { tap, catchError, flatMap, switchMap } from 'rxjs/operators'
import { CONFIG, lazyLoadFireBase } from './config'
import { concat, of } from 'rxjs'
import { startAuthListener } from '../auth/actions'

export const startLoadingFirebaseEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(START_LOADING_FIREBASE),
    flatMap(() => lazyLoadFireBase(CONFIG)),
    tap((app) => {
      firebase.next(app)
    }),
    switchMap(() => concat(of(finishedLoadingFirebase()), of(startAuthListener()))),
    catchError((error) => errorLoadingFirebase(error))
  )
