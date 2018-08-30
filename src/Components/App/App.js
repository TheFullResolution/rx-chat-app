import { css } from 'emotion'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NotFound } from '../Routes/NotFound/NotFound'
import { Home } from '../Routes/Home/Home'
import { Login } from '../Routes/Login/Login'
import { Signup } from '../Routes/Signup/Signup'
import { Header } from '../Blocks/Header/Header'

const className = css`
    color: hotpink;
`

export class App extends React.Component {
    render() {
        return (
            <div className={className}>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/signup" component={Signup} exact />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}
