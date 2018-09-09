import * as style from './Message.scss'

import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { chatPostMessage } from '../../../../../store/chat/actions'
import { Formik } from 'formik'

class MessageComponent extends Component {
  textarea = createRef()
  render() {
    const { submit, submitting } = this.props

    return (
      <Formik
        initialValues={{ message: '' }}
        onSubmit={({ message }, { resetForm }) => {
          resetForm()
          this.textarea.current.style = ''
          submit(message)
        }}
        validate={(values) =>
          !values.message || !/\S/.test(values.message) ? { message: 'Empty' } : {}
        }
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit} className={style.form}>
            <textarea
              id="message"
              ref={this.textarea}
              className={style.input}
              rows="1"
              placeholder="Type your message here"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div>
              <button
                type="submit"
                className={style.button}
                disabled={(errors && errors.message) || submitting}
              >
                Send
              </button>
            </div>
          </form>
        )}
      </Formik>
    )
  }
}
const mapStateToProps = (state) => ({
  submitting: state.chat.submitting,
})

const mapDispatchToProps = (dispatch) => ({
  submit: (message) => dispatch(chatPostMessage(message)),
})

export const Message = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageComponent)
