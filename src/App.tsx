import { useState } from 'react'
import './App.css'
import LoginPage from './LoginPage'
import { useAuth } from './useAuth'

function App() {
  const { user, loading, error, signOutUser } = useAuth()
  const [count, setCount] = useState(0)

  if (loading) {
    return <div className="loading-screen">Checking authentication…</div>
  }

  if (!user) {
    return <LoginPage />
  }

  return (
    <>
      <header className="auth-header">
        <div className="auth-bar">
          <div className="user-info">
            Signed in as <strong>{user.displayName ?? user.email ?? 'User'}</strong>
          </div>
          <button type="button" className="sign-out-button" onClick={signOutUser}>
            Sign out
          </button>
        </div>
      </header>

      <section id="center">
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {error ? <div className="auth-error">{error}</div> : null}

      <div className="ticks"></div>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  )
}

export default App
