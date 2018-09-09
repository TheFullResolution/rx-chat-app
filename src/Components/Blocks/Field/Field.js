import * as style from './Filed.scss'

import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

export const Field = ({
  className,
  autoComplete,
  error,
  handleBlur,
  handleChange,
  id,
  label,
  placeholder,
  touched,
  type,
  value,
}) => (
  <div className={classNames(style.container, className)}>
    {label && (
      <label htmlFor={id} className={classNames(style.label)}>
        {label}
      </label>
    )}
    <input
      {...{ autoComplete, id, placeholder, type, value }}
      onChange={handleChange}
      onBlur={handleBlur}
      className={classNames(style.input, error && touched && style.errorInput)}
    />
    {error && touched && <div className={style.error}>{error}</div>}
  </div>
)

Field.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
