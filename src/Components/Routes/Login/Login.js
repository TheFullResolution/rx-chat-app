import PropTypes from 'prop-types'
import React from 'react'
import { validate } from './methods/validate'
import { submit } from './methods/submit'
import { LoginForm } from './LoginForm/LoginForm'
import connect from 'react-redux/es/connect/connect'
import { Redirect } from 'react-router-dom'

export const LoginComponent = ({ loggedIn, location }) => {
    const { from } = location.state || {
        from: { pathname: '/' },
    }

    if (loggedIn) {
        return <Redirect to={from} />
    }

    return <LoginForm validate={validate} submit={submit} />
}

LoginComponent.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    location: PropTypes.object,
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.loggedIn,
})

export const Login = connect(mapStateToProps)(LoginComponent)
