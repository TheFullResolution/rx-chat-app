import React, { Component } from 'react'
import { Chat } from './Components/Chat/Chat'
import { Message } from './Components/Message/Message'
import { chatStore } from '../../../store/redux'
import { chatInitStart } from '../../../store/chat/actions'

export class Home extends Component {
  onClick = () => {
    chatStore.dispatch(chatInitStart())
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>TEST</button>
        <Chat />
        <Message />
      </div>
    )
  }
}
