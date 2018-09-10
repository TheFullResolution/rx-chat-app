import PropTypes from 'prop-types'
import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { Redirect, withRouter } from 'react-router-dom'
import { COMMON_FIELDS, LOGIN, LOGIN_FIELDS, SIGNUP, SIGNUP_FIELDS } from './LoginSignupConstants'
import { LoginSignupView } from './LoginSignupView'
import { ROUTER_PATHS } from '../../App/App'

export const LoginSignupComponent = ({ loggedIn, location }) => {
  const { from } = location.state || {
    from: { pathname: ROUTER_PATHS.home },
  }

  if (loggedIn) {
    return <Redirect to={from} />
  }

  switch (location.pathname) {
    case ROUTER_PATHS.login:
      return <LoginSignupView variant={LOGIN} fields={[...COMMON_FIELDS, ...LOGIN_FIELDS]} />

    case ROUTER_PATHS.signup:
      return <LoginSignupView variant={SIGNUP} fields={[...COMMON_FIELDS, ...SIGNUP_FIELDS]} />
  }
}

LoginSignupComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object,
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
})

export const LoginSignupRoute = withRouter(connect(mapStateToProps)(LoginSignupComponent))
