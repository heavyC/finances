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

export default App
