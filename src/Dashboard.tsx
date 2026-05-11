import type { User } from "firebase/auth"
import "./Dashboard.css"

interface DashboardProps {
    user: User
    onSignOut: () => void
}

export default function Dashboard({ user, onSignOut }: DashboardProps) {
    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Finance</h2>
                </div>
                <nav className="sidebar-nav">
                    <a href="#dashboard" className="nav-item active">
                        Dashboard
                    </a>
                    <a href="#transactions" className="nav-item">
                        Transactions
                    </a>
                    <a href="#reports" className="nav-item">
                        Reports
                    </a>
                    <a href="#settings" className="nav-item">
                        Settings
                    </a>
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
                    <div className="panel-header">
                        <h3>Recent Transactions</h3>
                    </div>
                    <div className="transactions-list">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="transaction-item">
                                <div className="transaction-details">
                                    <div className="transaction-name">
                                        {i % 3 === 0 ? "Coffee Shop" : i % 3 === 1 ? "Grocery Store" : "Gas Station"}
                                    </div>
                                    <div className="transaction-date">
                                        {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                                    </div>
                                </div>
                                <div
                                    className={`transaction-amount ${i % 2 === 0 ? "expense" : "income"
                                        }`}
                                >
                                    {i % 2 === 0 ? "-" : "+"}${(Math.random() * 100).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
