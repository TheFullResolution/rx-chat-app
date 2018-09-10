import * as style from './Chat.scss'

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const Message = ({ element, userID }) => {
  if (element.uid === userID) {
    return (
      <li className={classNames(style.message, style.user)}>
        <span className={style.text}>{element.message}</span>
        <span className={style.details}>posted: {element.posted}</span>
      </li>
    )
  }
  return (
    <li className={classNames(style.message, style.other)}>
      <span className={style.details}>{element.user} wrote:</span>
      <span className={style.text}>{element.message}</span>
      <span className={style.details}>posted: {element.posted}</span>
    </li>
  )
}

const ChatComponent = ({ initiated, messages, userID }) => (
  <div className={style.container}>
    <ul className={style.list}>
      {initiated && messages.length ? (
        messages.map((message) => <Message element={message} key={message.id} userID={userID} />)
      ) : (
        <p>Loading</p>
      )}
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  initiated: state.chat.initiated,
  userID: state.auth.user.uid,
})

export const Chat = connect(mapStateToProps)(ChatComponent)
