import * as style from './FormView.scss'

import PropTypes from 'prop-types'
import { Field } from '../../../../Blocks/Field/Field'
import React from 'react'

export const FormView = ({
  fields,
  isSubmitting,
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
}) => (
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
)

FormView.propTypes = {
  errors: PropTypes.object,
  fields: PropTypes.array.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  touched: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired
}
