import * as style from './Header.scss'

import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { firebaseApp$ } from '../../../store/firebase/config'
import { Link, withRouter } from 'react-router-dom'
import connect from 'react-redux/es/connect/connect'

const logOut = (ev) => {
  ev.preventDefault()

  firebaseApp$.subscribe((app) => {
    app.auth().signOut()
  })
}

const HeaderComponent = ({ user, loggedIn }) => (
  <header className={style.container}>
    <h1>Chat App</h1>
    {loggedIn && user.displayName && <h2>Hi, {user.displayName}!</h2>}
    <nav>
      {loggedIn && (
        <button className={style.navItem} onClick={logOut}>
          Logout
        </button>
      )}
      {!loggedIn && (
        <Fragment>
          <Link className={style.navItem} to={`${process.env.ROUTE}/login`}>
            Login
          </Link>
          <Link className={style.navItem} to={`${process.env.ROUTE}/signup`}>
            Signup
          </Link>
        </Fragment>
      )}
    </nav>
  </header>
)

HeaderComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user,
})

export const Header = withRouter(connect(mapStateToProps)(HeaderComponent))
