import './global.scss'

import 'focus-visible/dist/focus-visible.js'

import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { App } from './Components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { chatStore } from './store/redux'

const RootWithoutHot = () => (
    <Provider store={chatStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

const RootWithHot = hot(module)(RootWithoutHot)

ReactDOM.render(<RootWithHot />, document.getElementById('app'))
