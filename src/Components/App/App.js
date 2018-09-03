import { css } from 'emotion'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { NotFound } from '../Routes/NotFound/NotFound'
import { Home } from '../Routes/Home/Home'
import { Login } from '../Routes/Login/Login'
import { Signup } from '../Routes/Signup/Signup'
import { Header } from '../Blocks/Header/Header'
import { store } from '../../store/redux'
import { startLoadingFirebase } from '../../store/firebase/actions'
import { PrivateRoute } from '../Blocks/PrivateRoute/PrivateRoute'
import { ThemeProvider } from 'emotion-theming'
import { theme, globalStyling } from '../styling'

globalStyling()

const className = css`
    color: hotpink;
`

export class App extends Component {
    componentDidMount() {
        store.dispatch(startLoadingFirebase())
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className={className}>
                    <Header />
                    <Switch>
                        <PrivateRoute path="/" component={Home} exact />
                        <Route path="/login" component={Login} exact />
                        <Route path="/signup" component={Signup} exact />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </ThemeProvider>
        )
    }
}
