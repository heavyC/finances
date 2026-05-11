import { useCallback, useEffect, useState } from "react"
import { onAuthStateChanged, signOut, type User } from "firebase/auth"
import { auth } from "./firebase"

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (currentUser) => {
                setUser(currentUser)
                setLoading(false)
            },
            (authError) => {
                setError(authError.message || "Authentication error")
                setLoading(false)
            }
        )

        return unsubscribe
    }, [])

    const signOutUser = useCallback(async () => {
        setError(null)

        try {
            await signOut(auth)
        } catch (signOutError) {
            setError(
                signOutError instanceof Error
                    ? signOutError.message
                    : "Unable to sign out"
            )
        }
    }, [])

    return { user, loading, error, signOutUser }
}
