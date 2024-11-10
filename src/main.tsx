import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'


const clientId = import.meta.env.VITE_AUTH_CLIENT_ID

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={clientId || ""}>
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>,
)
