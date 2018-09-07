import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Field } from '../Field/Field'
import { Formik } from 'formik'
import { LOGIN } from '../../LoginSignupConstants'
import { submitLogin } from './methods/submitLogin'
import { submitSignup } from './methods/submitSignup'
import { validate } from './methods/validate'

export const Form = ({ variant, fields }) => {
  const initialValues = fields.reduce((accumulator, value) => {
    return {...accumulator, [value.id]: ''}
  }, {})

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={variant === LOGIN ? submitLogin : submitSignup}
      validate={validate(fields)}
    >
      {({ isSubmitting, values, touched, errors, handleSubmit, handleChange, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <Field
              key={field.id}
              error={errors[field.id]}
              id={field.id}
              label={field.label}
              placeholder={field.placeholder}
              touched={touched[field.id]}
              type={field.type}
              value={values[field.id]}
              {...{ handleBlur, handleChange }}
            />
          ))}
          {errors.form && <div className="input-feedback">{errors.form}</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

Form.propTypes = {
  fields: PropTypes.array.isRequired,
  variant: PropTypes.string.isRequired,
}
