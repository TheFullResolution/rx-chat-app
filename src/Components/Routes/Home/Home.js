import * as style from './Home.scss'

import React, { Component } from 'react'
import { Chat } from './Components/Chat/Chat'
import { SendMessage } from './Components/SendMessage/SendMessage'
import { chatStore } from '../../../store/redux'
import { chatInitStart } from '../../../store/chat/actions'

export class Home extends Component {
  componentDidMount() {
    chatStore.dispatch(chatInitStart())
  }
  render() {
    return (
      <div className={style.container}>
        <Chat />
        <SendMessage />
      </div>
    )
  }
}
