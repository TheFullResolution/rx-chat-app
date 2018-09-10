import PropTypes from 'prop-types'
import * as style from './SendMessage.scss'

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
        {({ values, errors, handleSubmit, handleChange, handleBlur, submitForm }) => {
          const onEnterPress = (e) => {
            if (e.keyCode === 13 && e.shiftKey === false) {
              e.preventDefault()
              submitForm()
            }
          }

          return (
            <form onSubmit={handleSubmit} className={style.form}>
              <p>Use shift + enter for new line</p>
              <div className={style.container}>
                <textarea
                id="message"
                ref={this.textarea}
                className={style.input}
                rows="1"
                placeholder="Type your message here"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={onEnterPress}
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
              </div>
            </form>
          )
        }}
      </Formik>
    )
  }
}

MessageComponent.propTypes = {
  submit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
}

const mapStateToProps = (state) => ({
  submitting: state.chat.submitting,
})

const mapDispatchToProps = (dispatch) => ({
  submit: (message) => dispatch(chatPostMessage(message)),
})

export const SendMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageComponent)

