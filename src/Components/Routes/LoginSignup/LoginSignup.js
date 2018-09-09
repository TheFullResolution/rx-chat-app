import PropTypes from 'prop-types'
import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { Redirect, withRouter } from 'react-router-dom'
import { Form } from './Components/Form/Form'
import { COMMON_FIELDS, LOGIN, LOGIN_FIELDS, SIGNUP, SIGNUP_FIELDS } from './LoginSignupConstants'

export const LoginSignupComponent = ({ loggedIn, location }) => {
  const { from } = location.state || {
    from: { pathname: '/' },
  }

  if (loggedIn) {
    return <Redirect to={from} />
  }

  switch (location.pathname) {
    case '/login':
      return <Form variant={LOGIN} fields={[...COMMON_FIELDS, ...LOGIN_FIELDS]} />

    case '/signup':
      return <Form variant={SIGNUP} fields={[...COMMON_FIELDS, ...SIGNUP_FIELDS]} />
  }
}

LoginSignupComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object,
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
})

export const LoginSignup = withRouter(connect(mapStateToProps)(LoginSignupComponent))
