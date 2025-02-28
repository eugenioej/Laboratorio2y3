import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppCounter } from './components/AppCounter.jsx'
import { StudentForm } from './components/SimpleForm.jsx'
import { CustomHook } from './components/CustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHook/>
  </StrictMode>,
)

