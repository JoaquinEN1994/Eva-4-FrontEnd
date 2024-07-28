import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SuperHeroesApp } from './SuperHeroesApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SuperHeroesApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
