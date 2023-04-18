import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRoutes from './routes/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainRoutes/>
  </React.StrictMode>,
)