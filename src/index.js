import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { App } from './Components/App/App'
import { BrowserRouter } from 'react-router-dom'

const AppWithoutHot = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

const AppWithHot = hot(module)(AppWithoutHot)

ReactDOM.render(<AppWithHot />, document.getElementById('app'))
