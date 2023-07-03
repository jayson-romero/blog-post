import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthContextProvider} from './context/AuthContext'
import {TokenContextProvider} from './context/TokenContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenContextProvider>
      <AuthContextProvider> 
         <App/>        
      </AuthContextProvider>
    </TokenContextProvider>
  </React.StrictMode>,
)
