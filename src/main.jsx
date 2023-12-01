import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { customTheme } from './assets/context/context.jsx'
import { ThemeProvider } from '@emotion/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
 