import React from 'react'
import ReactDOM from 'react-dom'

import 'config/localization'
import 'css/normalize.css'
import 'css/index.css'

import App from 'App'
import AppConfiguration from 'config'

ReactDOM.render(
  <React.StrictMode>
    <AppConfiguration>
      <App />
    </AppConfiguration>
  </React.StrictMode>,
  document.getElementById('root')
)
