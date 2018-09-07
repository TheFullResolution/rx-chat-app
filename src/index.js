import './global.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { App } from './Components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/redux'

const RootWithoutHot = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

const RootWithHot = hot(module)(RootWithoutHot)

ReactDOM.render(<RootWithHot />, document.getElementById('app'))
