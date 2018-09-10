import { ofType } from 'redux-observable'
import { combineLatest, concat, from, of } from 'rxjs'
import {
  CHAT_INIT_START,
  CHAT_HISTORY_LOADED,
  CHAT_POST_MESSAGE,
  chatInitSuccessful,
  chatMessagePosted,
  chatHistoryLoaded,
  chatNewMessage,
} from './actions'
import { filter, flatMap, map, switchMap, takeUntil } from 'rxjs/operators'
import { COLLECTION } from '../firebase/config'
import { createObservableFromFirebase } from '../utils/createObservable'
import { formatDate } from '../utils/formatDate'
import { collectionData } from 'rxfire/firestore'
import { chatStore } from '../redux'
import { userSignupFinish } from '../loginSignup/actions'
import { SET_UNAUTHENTICATED, setUserUpdate } from '../auth/actions'

const LIMIT = 25

export const chatInitEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(CHAT_INIT_START),
    flatMap(() => {
      return combineLatest(firebase)
    }),
    flatMap(([app]) => {
      const query = app
        .firestore()
        .collection(COLLECTION)
        .orderBy('posted', 'desc')
        .limit(LIMIT)

      return from(query.get())
    }),
    map((data) => {
      const snapshot = []
      data.forEach((doc) => {
        snapshot.push({ ...doc.data(), id: doc.id })
      })

      return snapshot.slice(1)
    }),
    map((data) =>
      data.map((entry) => ({ ...entry, posted: formatDate(entry.posted.seconds) })).reverse()
    ),
    map((data) => chatHistoryLoaded(data))
  )

export const chatInitSuccessfulEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(CHAT_HISTORY_LOADED),
    flatMap(() => {
      return combineLatest(firebase)
    }),
    flatMap(([app]) => {
      const messages = app
        .firestore()
        .collection(COLLECTION)
        .orderBy('posted', 'desc')
        .limit(1)

      return collectionData(messages, 'id').pipe(
        map((messageArray) => messageArray[0]),
        filter((message) => message && message.posted),
        map((message) => ({ ...message, posted: formatDate(message.posted.seconds) })),
        map((message) => chatNewMessage(message)),
        takeUntil(action$.pipe(ofType(SET_UNAUTHENTICATED)))
      )
    })
  )

export const chatPostMessageEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(CHAT_POST_MESSAGE),
    flatMap((action) => {
      return combineLatest(firebase, from([action.payload]))
    }),
    flatMap(([app, payload]) => {
      const ref = app.firestore().collection(COLLECTION)

      return createObservableFromFirebase(
        ref.add({
          message: payload,
          uid: state$.value.auth.user.uid,
          posted: app.firebase_.firestore.FieldValue.serverTimestamp(),
          user: state$.value.auth.user.displayName,
        })
      )
    }),
    map(() => chatMessagePosted())
  )
