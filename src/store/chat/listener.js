import { chatStore } from '../redux'
import { collectionData } from 'rxfire/firestore'
import { COLLECTION } from '../firebase/config'
import { chatNewMessage } from './actions'
import { map, filter } from 'rxjs/operators'
import { formatDate } from '../utils/formatDate'

export const chatListener = (firebaseApp) => {
  const messages = firebaseApp
    .firestore()
    .collection(COLLECTION)
    .orderBy('posted', 'desc')
    .limit(1)

  collectionData(messages, 'id')
    .pipe(
      map((messageArray) => messageArray[0]),
      filter((message) => message && message.posted),
      map((message) => ({ ...message, posted: formatDate(message.posted.seconds) }))
    )
    .subscribe((message) => {
      chatStore.dispatch(chatNewMessage(message))
    })
}
