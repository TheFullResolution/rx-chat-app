import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

export const Field = ({
  error,
  label,
  handleBlur,
  handleChange,
  id,
  placeholder,
  touched,
  type,
  value,
}) => (
  <Fragment>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      className={error && touched ? 'text-input error' : 'text-input'}
    />
    {error && touched && <div className="input-feedback">{error}</div>}
  </Fragment>
)

Field.propTypes = {
  error: PropTypes.string,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
