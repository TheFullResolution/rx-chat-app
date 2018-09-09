import * as style from './Form.scss'

import PropTypes from 'prop-types'
import React from 'react'
import { Field } from '../Field/Field'
import { Formik } from 'formik'
import { LOGIN } from '../../LoginSignupConstants'
import { submitLogin } from './methods/submitLogin'
import { submitSignup } from './methods/submitSignup'
import { validate } from './methods/validate'

export const Form = ({ variant, fields }) => {
  const initialValues = fields.reduce((accumulator, value) => {
    return { ...accumulator, [value.id]: '' }
  }, {})

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={variant === LOGIN ? submitLogin : submitSignup}
      validate={validate(fields)}
    >
      {({ isSubmitting, values, touched, errors, handleSubmit, handleChange, handleBlur }) => (
        <form onSubmit={handleSubmit} className={style.form}>
          {fields.map((field) => (
            <Field
              key={field.id}
              error={errors[field.id]}
              id={field.id}
              autoComplete={field.autoComplete}
              label={field.label}
              placeholder={field.placeholder}
              touched={touched[field.id]}
              type={field.type}
              value={values[field.id] || ''}
              {...{ handleBlur, handleChange }}
            />
          ))}
          {errors.form && <div className={style.error}>{errors.form}</div>}
          <div className={style.controls}>
            <button type="submit" className={style.button} disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}

Form.propTypes = {
  fields: PropTypes.array.isRequired,
  variant: PropTypes.string.isRequired,
}
