import React from 'react'
import { withFormik } from 'formik'
import { validate } from './methods/validate'
import { handleSubmit } from './methods/handleSubmit'

const InnerFormSignup = ({
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
            placeholder="Enter your Password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? 'text-input error' : 'text-input'}
        />
        {errors.password &&
            touched.password && <div className="input-feedback">{errors.password}</div>}

        <label htmlFor="name">Name</label>
        <input
            id="name"
            placeholder="Enter your name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'text-input error' : 'text-input'}
        />
        {errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}
        <button type="submit" disabled={isSubmitting}>
            Submit
        </button>
    </form>
)

export const Signup = withFormik({
    mapPropsToValues: () => ({ email: '', password: '', name: '' }),
    validate,
    handleSubmit,
    displayName: 'Signup', // helps with React DevTools
})(InnerFormSignup)
