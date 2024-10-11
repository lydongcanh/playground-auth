import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="auth.au.dev1.ansarada.com"
    clientId="m1PX3S7BRmifKiQV14iH6W9owNigyAuG"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://api.ansarada.com/identity/"
    }}
  >
    <App />
  </Auth0Provider>,
)
