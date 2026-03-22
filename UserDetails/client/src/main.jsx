import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserDetails from './UserDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDetails/>
  </StrictMode>,
)
