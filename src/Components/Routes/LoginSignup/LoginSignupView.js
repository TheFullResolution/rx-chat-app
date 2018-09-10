import PropTypes from 'prop-types'
import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { FormController } from './Components/FormController/FormController'
import { FormView } from './Components/FormView/FormView'
import { userLoginStart, userSignupStart } from '../../../store/loginSignup/actions'
import { submitForm } from './methods/submitForm'
import { validate } from './methods/validate'
import { getInitialValues } from './methods/getInitialValues'

export const LoginSignupViewComponent = ({
  variant,
  fields,
  error,
  submitting,
  submitLogin,
  submitSignup,
}) => {
  const initialValues = getInitialValues(fields)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm(variant, {
        submitLogin,
        submitSignup,
      })}
      validate={validate(fields)}
      {...{ submitLogin, submitSignup }}
    >
      {({
        isSubmitting,
        setSubmitting,
        setErrors,
        values,
        touched,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <FormController {...{ setSubmitting, setErrors, error, submitting }}>
          <FormView
            {...{
              errors,
              fields,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }}
          />
        </FormController>
      )}
    </Formik>
  )
}

LoginSignupViewComponent.propTypes = {
  error: PropTypes.string,
  fields: PropTypes.array.isRequired,
  submitting: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  submitting: state.loginSignup.submitting,
  error: state.loginSignup.error,
})

const mapDispatchToProps = (dispatch) => ({
  submitSignup: (values) => dispatch(userSignupStart(values)),
  submitLogin: (values) => dispatch(userLoginStart(values)),
})

export const LoginSignupView = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSignupViewComponent)
