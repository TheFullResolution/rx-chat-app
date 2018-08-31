import React from 'react'
import { withFormik } from 'formik'
import { validate } from './methods/validate'
import { handleSubmit } from './methods/handleSubmit'

const InnerFormLogin = ({
    isSubmitting,
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
}) => (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
            id="email"
            placeholder="Enter your email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? 'text-input error' : 'text-input'}
        />
        {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
        <label htmlFor="password">Password</label>
        <input
            id="password"
            placeholder="Enter your email"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? 'text-input error' : 'text-input'}
        />
        {errors.password &&
            touched.password && <div className="input-feedback">{errors.password}</div>}

        <button type="submit" disabled={isSubmitting}>
            Submit
        </button>
    </form>
)

export const Login = withFormik({
    mapPropsToValues: () => ({ email: '', password: '', name: '' }),
    validate,
    handleSubmit,
    displayName: 'LoginFrom', // helps with React DevTools
})(InnerFormLogin)
