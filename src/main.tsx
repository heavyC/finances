import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import LoginPage from './LoginPage'
import Dashboard from './Dashboard'
import { useAuth } from './useAuth'

function App() {
  const { user, loading, signOutUser } = useAuth()

  if (loading) {
    return <div className="loading-screen">Checking authentication…</div>
  }
  if (!user) {
    return <LoginPage />
  }
  return <Dashboard user={user} onSignOut={signOutUser} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

