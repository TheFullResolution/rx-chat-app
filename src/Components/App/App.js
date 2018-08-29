import { css } from 'emotion'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NotFound } from '../Routes/NotFound/NotFound'
import { Home } from '../Routes/Home/Home'

const className = css`
    color: hotpink;
`

export class App extends React.Component {
    render() {
        return (
            <div className={className}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}
