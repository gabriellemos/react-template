import React from 'react'
import ReactDOM from 'react-dom'

import 'config/localization'
import 'css/normalize.css'
import 'css/index.css'

import AppRouter from 'pages'
import AppConfiguration from 'config'

ReactDOM.render(
  <React.StrictMode>
    <AppConfiguration>
      <AppRouter />
    </AppConfiguration>
  </React.StrictMode>,
  document.getElementById('root')
)
