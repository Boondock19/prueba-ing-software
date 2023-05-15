import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Login } from './modules/login/Login.tsx'
import { Landing } from './modules/landing/Landing.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Landing/>
  </React.StrictMode>,
)
