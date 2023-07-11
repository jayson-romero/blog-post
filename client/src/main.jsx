import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthContextProvider} from './context/AuthContext'
import {TokenContextProvider} from './context/TokenContext'
import {UserContextProvider} from './context/UserContext'
import {BlogContextProvider} from './context/BlogContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogContextProvider>
      <TokenContextProvider>
        <AuthContextProvider> 
          <UserContextProvider>
          <App/>        
          </UserContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </BlogContextProvider>
  </React.StrictMode>,
)
