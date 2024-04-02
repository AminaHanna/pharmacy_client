import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import Context from './USER/UI/Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <Toaster position="top-center" reverseOrder={false} />
    <App />
    </Context>
  </React.StrictMode>,
)
