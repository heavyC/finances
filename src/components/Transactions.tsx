import "/src/component-styles.css"

export default function DashboardContent() {
    return (
        <>
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
                        <div className={`transaction-amount ${i % 2 === 0 ? "expense" : "income"
                            }`}
                        >
                            {i % 2 === 0 ? "-" : "+"}${(Math.random() * 100).toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}