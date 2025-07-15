// Define global variables from Vite config
declare const __DEV__: boolean

import './global.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

const AppWrapper = () => {
  if (__DEV__) {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    )
  }

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(<AppWrapper />)
