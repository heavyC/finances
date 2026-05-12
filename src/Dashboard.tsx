import { useState } from "react"
import type { User } from "firebase/auth"
import "/src/component-styles.css"
import DashboardContent from "./components/DashboardContent"
import Reports from "./components/Reports"
import Settings from "./components/Settings"
import Transactions from "./components/Transactions"

interface DashboardProps {
    user: User
    onSignOut: () => void
}

export default function Dashboard({ user, onSignOut }: DashboardProps) {
    const [activeView, setActiveView] = useState('dashboard')

    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Finance</h2>
                </div>
                <nav className="sidebar-nav">
                    <div className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveView('dashboard')}>
                        Dashboard
                    </div>
                    <div className={`nav-item ${activeView === 'transactions' ? 'active' : ''}`} onClick={() => setActiveView('transactions')}>
                        Transactions
                    </div>
                    <div className={`nav-item ${activeView === 'reports' ? 'active' : ''}`} onClick={() => setActiveView('reports')}>
                        Reports
                    </div>
                    <div className={`nav-item ${activeView === 'settings' ? 'active' : ''}`} onClick={() => setActiveView('settings')}>
                        Settings
                    </div>
                </nav>
                <div className="sidebar-footer">
                    <div className="user-profile">
                        <div className="user-name">{user.displayName ?? "User"}</div>
                        <button className="sign-out-link" onClick={onSignOut}>
                            Sign out
                        </button>
                    </div>
                </div>
            </aside>

            <main className="dashboard-content">
                <section className="top-panel">
                    <div className="summary-card">
                        <div className="summary-item">
                            <span className="label">Balance</span>
                            <span className="value">$5,240.50</span>
                        </div>
                        <div className="summary-item">
                            <span className="label">Income</span>
                            <span className="value income">+$3,200.00</span>
                        </div>
                        <div className="summary-item">
                            <span className="label">Expenses</span>
                            <span className="value expense">-$1,840.25</span>
                        </div>
                    </div>
                </section>

                <section className="main-panel">
                    {activeView === 'dashboard' && <DashboardContent />}
                    {activeView === 'transactions' && <Transactions />}
                    {activeView === 'reports' && <Reports />}
                    {activeView === 'settings' && <Settings />}
                </section>
            </main>
        </div>
    )
}
