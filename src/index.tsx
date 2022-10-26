import React, { FC } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import { store } from './store/store'
import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
