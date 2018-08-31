import PropTypes from 'prop-types'
import React from 'react'
import { Formik } from 'formik'

export const LoginForm = ({ submit, validate }) => (
    <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        onSubmit={submit}
        validate={validate}
    >
        {({ isSubmitting, values, touched, errors, handleSubmit, handleChange, handleBlur }) => {
            return (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        placeholder="Enter your email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.email && touched.email ? 'text-input error' : 'text-input'
                        }
                    />
                    {errors.email &&
                        touched.email && <div className="input-feedback">{errors.email}</div>}
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        placeholder="Enter your email"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.password && touched.password ? 'text-input error' : 'text-input'
                        }
                    />
                    {errors.password &&
                        touched.password && <div className="input-feedback">{errors.password}</div>}

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )
        }}
    </Formik>
)

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
}
