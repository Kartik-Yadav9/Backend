import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Enquiry from './Enquiry'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Enquiry/>
  </StrictMode>
)
