import PropTypes from 'prop-types'
import * as style from './Chat.scss'

import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { ChatMessage } from './ChatMessage'
import { Loader } from '../../../../Blocks/Loader/Loader'

class ChatComponent extends Component {
  containerRef = createRef()

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length < this.props.messages.length) {
      this.scrollList()
    }
  }

  scrollList = () => {
    const { scrollHeight } = this.containerRef.current
    this.containerRef.current.scrollTop = scrollHeight
  }

  render() {
    const { initiated, messages, userID } = this.props
    return (
      <div className={style.container} ref={this.containerRef}>
        {initiated && messages.length ? (
          <ul className={style.list} >
            {messages.map((message) => (
              <ChatMessage element={message} key={message.id} userID={userID} />
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  initiated: state.chat.initiated,
  userID: state.auth.user.uid,
})

export const Chat = connect(mapStateToProps)(ChatComponent)

ChatComponent.propTypes = {
  initiated: PropTypes.bool.isRequired,
  messages: PropTypes.array,
  userID: PropTypes.string.isRequired,
}
