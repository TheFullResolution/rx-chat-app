import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { css } from 'emotion'

const className = css`
    color: hotpink;
`

class App extends React.Component {
    render() {
        return <div className={className}>Hello {this.props.name}</div>
    }
}

const AppWithHot = hot(module)(App)

var mountNode = document.getElementById('app')
ReactDOM.render(<AppWithHot name="Jane" />, mountNode)
