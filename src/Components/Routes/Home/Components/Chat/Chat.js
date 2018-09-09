import React from 'react'
import { connect } from 'react-redux'

const ChatComponent = ({ initiated, messages }) => (
  <ul>
    {messages.length > 0 ? (
      messages.map((el, index) => <li key={index}>{el.message} - user: {el.user}</li>)
    ) : (
      <p>Loading</p>
    )}
  </ul>
)

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  initiated: state.chat.initiated,
})

export const Chat = connect(mapStateToProps)(ChatComponent)
