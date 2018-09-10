import { ofType } from 'redux-observable'
import { combineLatest, from, of } from 'rxjs'
import { SET_USER_UPDATE } from './actions'
import { createObservableFromFirebase } from '../utils/createObservable'
import { catchError, flatMap, map } from 'rxjs/operators'
import { userLoginCompleted, userLoginSignupError } from '../loginSignup/actions'

export const setUserUpdateEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(SET_USER_UPDATE),
    flatMap((action) => combineLatest(firebase, from([action.payload]))),
    flatMap(([app, payload]) =>
      createObservableFromFirebase(

      ).pipe(
        map(() => userLoginCompleted()),
        catchError((err) => of(userLoginSignupError(err)))
      )
    )
  )
