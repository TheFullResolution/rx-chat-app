import { ofType } from 'redux-observable'
import { combineLatest, concat, from, of } from 'rxjs'
import {
  USER_LOGIN_START,
  USER_SIGNUP_START,
  USER_SIGNUP_UPDATE,
  userLoginCompleted,
  userLoginSignupError,
  userSignupFinish,
  userSignupUpdate,
} from './actions'
import { catchError, flatMap, map, switchMap } from 'rxjs/operators'
import { createObservableFromFirebase } from '../utils/createObservable'
import { setUserUpdate } from '../auth/actions'

export const userLoginStartEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(USER_LOGIN_START),
    flatMap((action) => combineLatest(firebase, from([action.payload]))),
    flatMap(([app, payload]) =>
      createObservableFromFirebase(
        app.auth().signInWithEmailAndPassword(payload.email, payload.password)
      ).pipe(
        map(() => userLoginCompleted()),
        catchError((err) => of(userLoginSignupError(err)))
      )
    )
  )

export const userSignupStartEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(USER_SIGNUP_START),
    flatMap((action) => combineLatest(firebase, from([action.payload]))),
    flatMap(([app, payload]) => {
      return createObservableFromFirebase(
        app.auth().createUserWithEmailAndPassword(payload.email, payload.password),
        payload.name
      ).pipe(
        map((name) => userSignupUpdate(name)),
        catchError((err) => of(userLoginSignupError(err)))
      )
    })
  )

export const userSignupUpdateEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(USER_SIGNUP_UPDATE),
    flatMap((action) => combineLatest(firebase, from([action.payload]))),
    flatMap(([app, payload]) => {
      return createObservableFromFirebase(
        app.auth().currentUser.updateProfile({ displayName: payload }),
        payload
      ).pipe(
        switchMap((payload) => concat(of(userSignupFinish()), of(setUserUpdate(payload)))),
        catchError((err) => of(userLoginSignupError(err)))
      )
    })
  )
