import PropTypes from 'prop-types'
import { Component } from 'react'


export class FormController extends Component {
  componentDidUpdate(prevProps) {
    if(prevProps.error !== this.props.error) this.setErrors()
    if(prevProps.submitting !== this.props.submitting) this.setSubmitting()
  }

  setErrors = () => {
    const {error, setErrors} = this.props

    setErrors({form: error})
  }

  setSubmitting = () => {
    const {setSubmitting, submitting} = this.props

    setSubmitting(submitting)
  }

  render() {
    return this.props.children
  }
}

FormController.propTypes = {
  children: PropTypes.any,
  error: PropTypes.string,
  setErrors: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}
