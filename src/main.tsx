import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterApp } from './services/router.routes'

import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
)
