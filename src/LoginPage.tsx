import { useState } from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "./firebase"

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleGoogleSignIn = async () => {
        setError(null)
        setLoading(true)

        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: "select_account" })

        try {
            await signInWithPopup(auth, provider)
        } catch (signInError) {
            setError(
                signInError instanceof Error
                    ? signInError.message
                    : "Unable to sign in with Google"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="login-page">
            <section className="login-panel">
                <h1>Sign in to Finances app</h1>
                <p>Use your Google account to access the app.</p>
                <button
                    type="button"
                    className="sign-in-button"
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                >
                    {loading ? "Signing in…" : "Sign in with Google"}
                </button>
                {error ? <p className="error-message">{error}</p> : null}
            </section>
        </main>
    )
}
