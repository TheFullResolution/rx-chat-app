import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as style from './Chat.scss'
import React from 'react'

export const ChatMessage = ({ element, userID }) => {
  if (element.uid === userID) {
    return (
      <li className={classNames(style.message, style.user)}>
        <span className={style.text}>
          {element.message}
        </span>
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

ChatMessage.propTypes = {
  element: PropTypes.object.isRequired,
  userID: PropTypes.string.isRequired,
}
