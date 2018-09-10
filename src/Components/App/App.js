import * as style from './App.scss'

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { NotFound } from '../Routes/NotFound/NotFound'
import { Home } from '../Routes/Home/Home'
import { LoginSignupRoute } from '../Routes/LoginSignup/LoginSignupRoute'
import { Header } from '../Blocks/Header/Header'
import { chatStore } from '../../store/redux'
import { startLoadingFirebase } from '../../store/firebase/actions'
import { PrivateRoute } from '../Blocks/PrivateRoute/PrivateRoute'

export class App extends Component {
  componentDidMount() {
    chatStore.dispatch(startLoadingFirebase())
  }
  render() {
    return (
      <div className={style.container}>
        <Header />
        <Switch>
          <PrivateRoute path="/" component={Home} exact />
          <Route path="/login" component={LoginSignupRoute} exact />
          <Route path="/signup" component={LoginSignupRoute} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
